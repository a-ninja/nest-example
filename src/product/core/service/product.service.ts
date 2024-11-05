import { Injectable } from '@nestjs/common';
import { ProductServiceRequestDTO } from './model/productServiceRequest.dto';
import { ProductServiceResponseDTO } from './model/productServiceResponse.dto';
import { Collection } from "scl"

/**
 * src/product/infrastructure/product.service.impl
 */

@Injectable()
export abstract class ProductService {
   abstract createProduct(productServiceRequestDTO: ProductServiceRequestDTO): Promise<ProductServiceResponseDTO>;
   abstract getProducts(): Promise<Collection<ProductServiceResponseDTO>>;
}