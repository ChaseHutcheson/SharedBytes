import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// configures SwaggerUI
	const config = new DocumentBuilder()
		.setTitle('SharedByte')
		.setVersion('1.0')
		.addOAuth2(
			{
				type: 'oauth2',
				flows: {
					password: {
						tokenUrl: '/oauth2/login',
						scopes: {},
					},
				},
			},
			'Authentication'
		)
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document, {
		swaggerOptions: {
			oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
			persistAuthorization: true,
			initOAuth: {
				clientSecret: 'secret',
				appName: 'SharedByte',
			},
		},
	});

	// get PORT from config
	const configService = app.get(ConfigService);
	const PORT = configService.get<number>('PORT');

	// start application
	await app.listen(PORT);
	console.log(`Application is running on: http://localhost:${PORT}`);
	console.log(`View the API Documentation at: http://localhost:${PORT}/docs`);
}
bootstrap();
