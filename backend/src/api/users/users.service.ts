import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/core/security';
import {
	UpdateUserSchema,
	UserProfileSchema,
} from 'src/schemas/users/users.schemas';
import { Repository } from 'typeorm';
import { User } from '../../entities/users/user.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(User)
		private readonly usersRepository: Repository<User>
	) {}

	async findAll(): Promise<User[]> {
		return this.usersRepository.find();
	}

	async findOne(email: string): Promise<User> {
		return await this.usersRepository
			.createQueryBuilder('user')
			.select(['user.email', 'user.id'])
			.addSelect('user.password')
			.where('user.email = :email', { email })
			.getOne();
	}

	async findById(id: number): Promise<User> {
		const user = await this.usersRepository.findOneBy({ id: id });
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}

	async updateUser(id: number, update: UpdateUserSchema): Promise<User> {
		const user = await this.findById(id);

		if (update.email) user.email = update.email;
		if (update.username) user.username = update.username;
		if (update.password) user.password = hashPassword(update.password);

		await this.usersRepository.save(user);

		return await this.findById(id);
	}

	async remove(id: string): Promise<void> {
		await this.usersRepository.delete(id);
	}
}
