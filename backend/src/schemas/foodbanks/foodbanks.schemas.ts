import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class FoodBankSchema {
	@ApiProperty({ description: 'Food bank ID' })
	id: number;

	@ApiProperty({
		example: 'Second Harvest Food Bank',
		description: 'Food bank name',
	})
	name: string;

	@ApiProperty({ example: '1 Tressell Way', description: 'Street address' })
	address: string;

	@ApiProperty({ example: 'Youngstown', description: 'City' })
	city: string;

	@ApiProperty({ example: 'OH', description: 'State abbreviation' })
	state: string;

	@ApiProperty({ example: '44555', description: 'Zip code' })
	zipCode: number;

	@ApiProperty()
	cans: number;

	@ApiProperty()
	snacks: number;

	@ApiProperty()
	beverages: number;
}

export class UpdateFoodBankSchema {
	@ApiProperty()
	@IsOptional()
	cans?: number;

	@ApiProperty()
	@IsOptional()
	snacks?: number;

	@ApiProperty()
	@IsOptional()
	beverages?: number;
}
