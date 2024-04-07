import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodBank } from 'src/entities/foodbanks/foodbank.entity';
import { UpdateFoodBankSchema } from 'src/schemas/foodbanks/foodbanks.schemas';
import { Repository } from 'typeorm';

@Injectable()
export class FoodBankService {
	constructor(
		@InjectRepository(FoodBank)
		private readonly foodbankRepository: Repository<FoodBank>
	) {}

	async findAll(): Promise<FoodBank[]> {
		return this.foodbankRepository.find();
	}

	async findById(id: number): Promise<FoodBank> {
		const foodbank = this.foodbankRepository.findOneBy({ id: id });
		if (!foodbank) {
			throw new NotFoundException();
		}
		return foodbank;
	}

	async update(id: number, update: UpdateFoodBankSchema): Promise<FoodBank> {
		const foodbank = await this.findById(id);

		if (update.beverages) foodbank.beverages = update.beverages;
		if (update.cans) foodbank.cans = update.cans;
		if (update.snacks) foodbank.snacks = update.snacks;

		return await this.foodbankRepository.save(foodbank);
	}
}
