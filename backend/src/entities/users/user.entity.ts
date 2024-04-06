import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// This defines how a user should be stored in the database
@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty({ example: 'username', description: 'Username' })
	@Column({ nullable: false })
	username: string;

	@ApiProperty({ example: 'user@example.com', description: 'Email' })
	@Column({ nullable: false })
	email: string;

	@ApiProperty({ example: 'string', description: 'Password' })
	@Column({ nullable: false, select: false })
	password: string;
}
