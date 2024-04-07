import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOAuth2, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public.decorator';
import {
	CreateFoodBankSchema,
	FoodBankSchema,
	UpdateFoodBankSchema,
} from 'src/schemas/foodbanks/foodbanks.schemas';
import { FoodBankService } from './foodbanks.service';

@ApiOAuth2([], 'Authentication')
@ApiTags('Foodbanks')
@Controller('foodbanks')
export class FoodBanksController {
	constructor(private foodbankService: FoodBankService) {}

	@Get('all')
	@ApiOperation({ summary: 'Get all Food Banks' })
	@ApiResponse({
		status: 200,
		type: [FoodBankSchema],
	})
	findAll(): Promise<FoodBankSchema[]> {
		return this.foodbankService.findAll();
	}

	@Post('create')
	@ApiOperation({ summary: 'Create a new Food Bank' })
	@ApiResponse({
		status: 200,
		type: FoodBankSchema,
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	create(@Body() bank: CreateFoodBankSchema): Promise<FoodBankSchema> {
		return this.foodbankService.create(bank);
	}

	@Get(':id')
	@ApiOperation({ summary: 'Get a single Food Bank by id' })
	@ApiResponse({
		status: 200,
		type: FoodBankSchema,
	})
	@ApiResponse({
		status: 404,
		description: 'Food bank not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	findOne(@Param('id') id: number): Promise<FoodBankSchema> {
		return this.foodbankService.findById(id);
	}

	@Public()
	@Patch(':id')
	@ApiOperation({ summary: 'Update a Food Bank by id' })
	@ApiResponse({
		status: 200,
		type: FoodBankSchema,
	})
	@ApiResponse({
		status: 404,
		description: 'Food bank not found',
	})
	@ApiResponse({
		status: 401,
		description: 'Access Forbidden',
	})
	update(
		@Param('id') id: number,
		@Body() update: UpdateFoodBankSchema
	): Promise<FoodBankSchema> {
		// TODO: Send push notifications to users
		return this.foodbankService.update(id, update);
	}
}
