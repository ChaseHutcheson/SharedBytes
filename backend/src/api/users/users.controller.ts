import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Request,
} from '@nestjs/common';
import {
	ApiBearerAuth,
	ApiOAuth2,
	ApiOperation,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import {
	CreateUserSchema,
	UpdateUserSchema,
	UserInDbSchema,
	UserProfileSchema,
} from 'src/schemas/users/users.schemas';
import { User } from '../../entities/users/user.entity';
import { UsersService } from './users.service';

@ApiOAuth2([], 'Authentication')
@ApiTags('Users')
@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get('me')
	@ApiResponse({
		status: 200,
		type: UserProfileSchema,
	})
	@ApiResponse({
		status: 404,
		description: 'User not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	@ApiOperation({ summary: 'Get User Me' })
	getProfile(@Request() req): Promise<User> {
		return this.usersService.findById(req.user.sub);
	}

	@Patch('me/update')
	@ApiResponse({
		status: 200,
		type: UserProfileSchema,
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	@ApiOperation({ summary: 'Update your user information' })
	updateProfile(
		@Request() req,
		@Body() update: UpdateUserSchema
	): Promise<User> {
		return this.usersService.updateUser(req.user.sub, update);
	}

	@Get('all')
	@ApiOperation({ summary: 'Get all users' })
	@ApiResponse({
		status: 200,
		type: [UserProfileSchema],
	})
	@ApiResponse({
		status: 404,
		description: 'Users not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	findAll(): Promise<UserProfileSchema[]> {
		return this.usersService.findAll();
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get single user' })
	@ApiResponse({
		status: 200,
		type: UserProfileSchema,
	})
	@ApiResponse({
		status: 404,
		description: 'User not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	findOne(@Param('id') id: number): Promise<UserProfileSchema> {
		return this.usersService.findById(id);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete User' })
	@ApiResponse({
		status: 200,
		description: 'User Deletion Success',
	})
	@ApiResponse({
		status: 404,
		description: 'User not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	remove(@Param('id') id: string): Promise<void> {
		return this.usersService.remove(id);
	}
}
