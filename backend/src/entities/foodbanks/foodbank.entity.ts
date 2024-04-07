import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FoodBank {
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty({
		example: 'Second Harvest Food Bank',
		description: 'Food bank name',
	})
	@Column({ nullable: false })
	name: string;

	@ApiProperty({ example: '1 Tressell Way', description: 'Street address' })
	@Column({ nullable: false })
	address: string;

	@ApiProperty({ example: 'Youngstown', description: 'City' })
	@Column({ nullable: false })
	city: string;

	@ApiProperty({ example: 'OH', description: 'State abbreviation' })
	@Column({ nullable: false })
	state: string;

	@ApiProperty({ example: '44555', description: 'Zip code' })
	@Column({ nullable: false })
	zipCode: number;

	@Column({ nullable: false, default: 0 })
	cans: number;

	@Column({ nullable: false, default: 0 })
	snacks: number;

	@Column({ nullable: false, default: 0 })
	beverages: number;
}
