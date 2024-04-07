import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodBank } from 'src/entities/foodbanks/foodbank.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { UsersModule } from '../users/users.module';
import { FoodBanksController as FoodBankController } from './foodbanks.controller';
import { FoodBankService } from './foodbanks.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([FoodBank]),
		ConfigModule,
		UsersModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				global: true,
				secret: configService.get<string>('JWT_SECRET'),
				signOptions: { expiresIn: '2 days' },
			}),
			inject: [ConfigService],
		}),
	],
	providers: [FoodBankService, { provide: APP_GUARD, useClass: AuthGuard }],
	controllers: [FoodBankController],
	exports: [FoodBankService],
})
export class FoodBanksModule {}
