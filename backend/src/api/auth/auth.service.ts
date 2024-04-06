import {
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/api/users/users.service';
import { comparePassword, hashPassword } from 'src/core/security';
import { User } from 'src/entities/users/user.entity';
import { CreateUserSchema } from 'src/schemas/users/users.schemas';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>,
		private usersService: UsersService,
		private jwtService: JwtService
	) {}

	async register(createUserIn: CreateUserSchema): Promise<User> {
		const { username, email, password } = createUserIn;
		const hashedPassword = hashPassword(password);

		const user = await this.usersRepository.save({
			username,
			email,
			password: hashedPassword,
		});

		return user;
	}

	async signIn(email: string, password: string): Promise<any> {
		const user = await this.usersService.findOne(email);
		if (!user) {
			throw new NotFoundException();
		}
		if (!comparePassword(password, user.password)) {
			throw new UnauthorizedException();
		}
		const payload = { sub: user.id, email: user.email };

		return { access_token: await this.jwtService.signAsync(payload) };
	}

	async doesUserExist(email: string): Promise<boolean> {
		const user = await this.usersService.findOne(email);
		if (user) {
			return true;
		}
		return false;
	}
}
