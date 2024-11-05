import { ConsoleLogger, Injectable } from '@nestjs/common';
import { ProductServiceRequestDTO } from '../core/service/model/productServiceRequest.dto';
import { ProductServiceResponseDTO } from '../core/service/model/productServiceResponse.dto';
import { ProductPortRequestDTO } from '../core/ports/model/productPortRequest.dto';
import { ProductPort } from '../core/ports/product.port';

import { ProductService } from '../core/service/product.service';
import { IoTJobsDataPlane, Scheduler } from 'aws-sdk';
import { Collection } from "scl"

@Injectable()
export class ProductServiceImpl extends ProductService {
   constructor(private readonly productPort: ProductPort) { super() }
   
   async createProduct(productServiceRequestDTO: ProductServiceRequestDTO): Promise<ProductServiceResponseDTO> {

      //transform DomainRequest to PortRequest
      const productPortRequestDTO = ProductPortRequestDTO.fromProductServiceRequestDTO(productServiceRequestDTO)

      //call port
      console.log("ProductServiceImpl: calling callCreateProduct")
      const productPortResponseDTO =  await this.productPort.callCreateProduct(productPortRequestDTO)
      console.log("productPortResponseDTO",productPortResponseDTO)

      //transform PortResponse to ServiceResponse
      const productServiceResponseDTO = productPortResponseDTO.toProductServiceResponseDTO()
      console.log("productServiceResponseDTO",productServiceResponseDTO)

      return productServiceResponseDTO
   }

   async getProducts(): Promise<Collection<ProductServiceResponseDTO>> {
      const allProducts = await this.productPort.getAllProducts()
      const allProducts1 = allProducts.map((product) => {
         // products.map(product => {
            return product.toProductServiceResponseDTO()
         // })
      })
      return allProducts1
   }
}