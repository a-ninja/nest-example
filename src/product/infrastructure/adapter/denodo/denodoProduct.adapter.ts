import { Inject, Injectable } from "@nestjs/common";
import { ProductPort } from "src/product/core/ports/product.port";
import { ProductCreateDTO } from "./entity/product.entity";
import { ProductRepository } from "./repository/ProductRepository";
import { ProductPortRequestDTO } from "src/product/core/ports/model/productPortRequest.dto";
import { ProductPortResponseDTO } from "src/product/core/ports/model/productPortResponse.dto";
import { Collection } from "scl"

@Injectable()
export class DenodoProductAdapter extends ProductPort {
  /**
   * 
   * @param productRepository
   */
  constructor(
    @Inject('ProductRepository') private readonly productRepository: ProductRepository) {
    super()
  }

  async callCreateProduct(productPortDTO: ProductPortRequestDTO): Promise<ProductPortResponseDTO> {
    /**
     * Convert productPortDTO to Denodo compatible query
     */

    var data = new ProductCreateDTO(productPortDTO.name, productPortDTO.description)
    const createdProduct = await this.productRepository.createItem(data)
    console.log("DenodoProductAdapter.callCreateProduct entity", createdProduct)
    return new ProductPortResponseDTO(createdProduct.name, createdProduct.description)
  }

  async getAllProducts(): Promise<Collection<ProductPortResponseDTO>> {
    console.log("DenodoProductAdapter.getAllProducts calling findAll")

    const products = await this.productRepository.findAll()//.then((products) => {
    console.log("DenodoProductAdapter product entities", products)
    const products1 = products.map((product) => {
      return new ProductPortResponseDTO(product.name, product.description)
    })
    return products1
  }
}