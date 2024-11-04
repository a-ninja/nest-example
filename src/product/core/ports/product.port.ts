import { Injectable } from '@nestjs/common';
import { ProductPortRequestDTO } from './model/productPortRequest.dto';
import { ProductPortResponseDTO } from './model/productPortResponse.dto';
import { Collection } from "scl"


@Injectable()
export abstract class ProductPort {
   abstract callCreateProduct(productPortRequestDTO: ProductPortRequestDTO): Promise<ProductPortResponseDTO>;
   abstract getAllProducts(): Promise<Collection<ProductPortResponseDTO>>
}