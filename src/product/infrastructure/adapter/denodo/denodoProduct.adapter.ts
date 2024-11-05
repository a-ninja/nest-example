import { Inject, Injectable } from "@nestjs/common";
import { ProductPort } from "src/product/core/ports/product.port";
import { ProductEntity } from "./entity/product.entity";
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

  /**
   * This method calls the createProduct method with a DTO object which abstracts the Entity
   * @param productPortDTO 
   * @returns 
   */
  /*async callCreateProductUsingDTO(productPortDTO: ProductPortRequestDTO): Promise<ProductPortResponseDTO> {
    //
    // Convert productPortDTO to Denodo compatible query
    //

    var data = new ProductCreateDTO(productPortDTO.name, productPortDTO.description)
    const createdProduct = await this.productRepository.createProduct(data)
    console.log("DenodoProductAdapter.callCreateProduct entity", createdProduct)
    return new ProductPortResponseDTO(createdProduct.name, createdProduct.description)
  }*/

  /**
   * This method calls the createProduct method with directly the Entity object
   * @param productPortDTO 
   * @returns 
   */
  async callCreateProduct(productPortDTO: ProductPortRequestDTO): Promise<ProductPortResponseDTO> {
    /**
     * Convert productPortDTO to Denodo compatible query
     */

    // var data = new ProductCreateDTO(productPortDTO.name, productPortDTO.description)
    var data = new ProductEntity(
      productPortDTO.description,
      productPortDTO.name,
      productPortDTO.productId,
      productPortDTO.manufacturerId)
    const createdProduct = await this.productRepository.createProduct(data)
    console.log("DenodoProductAdapter.callCreateProduct created entity", createdProduct)
    return new ProductPortResponseDTO(
      createdProduct.description,
      createdProduct.name,
      createdProduct.productId,
      createdProduct.manufacturerId)
  }

  async getAllProducts(): Promise<Collection<ProductPortResponseDTO>> {
    console.log("DenodoProductAdapter.getAllProducts calling findAll")

    const products = await this.productRepository.findAll()
    console.log("DenodoProductAdapter product entities", products)
    const productDTOs = products.map((product) => {
      return new ProductPortResponseDTO(
        product.description,
        product.name,
        product.productId,
        product.manufacturerId)
    })
    return productDTOs
  }
}