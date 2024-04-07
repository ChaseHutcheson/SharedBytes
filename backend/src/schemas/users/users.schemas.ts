import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { isRegExp } from 'util/types';

// schema that is used when a user is pulled from the database
export class UserProfileSchema {
	@ApiProperty({ example: 1, description: 'User id' })
	id: number;

	@ApiProperty({ example: 'username', description: 'Username' })
	username: string;

	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	email: string;
}

// schema that is used when a user signs in
export class UserSignInSchema {
	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	@IsEmail()
	readonly email: string;

	@ApiProperty({ example: 'string', description: 'password' })
	@IsString()
	readonly password: string;
}

// schema that is used when a user signs into the docs
export class Oauth2SignInSchema {
	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	@IsEmail()
	readonly username: string;

	@ApiProperty({ example: 'string', description: 'password' })
	@IsString()
	readonly password: string;
}

// schema that is used when a user is pulled from the database
export class UserInDbSchema {
	@ApiProperty({ example: 1, description: 'User id' })
	id: number;

	@ApiProperty({ example: 'username', description: 'Username' })
	username: string;

	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	email: string;

	@ApiProperty({ example: 'string', description: 'Password' })
	password: string;
}

// Schema that is used to create a user
export class CreateUserSchema {
	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	email: string;

	@ApiProperty({ example: 'username', description: 'Username' })
	username: string;

	@ApiProperty({ example: 'string', description: 'Password' })
	password: string;
}

// Schema used for updating users
export class UpdateUserSchema extends PartialType(CreateUserSchema) {
	@ApiProperty({ example: 'string', description: 'Current Password' })
	@IsOptional()
	currentPassword?: string;
}
