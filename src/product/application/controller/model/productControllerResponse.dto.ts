import { ApiProperty } from "@nestjs/swagger";
import { ProductServiceResponseDTO } from "src/product/core/service/model/productServiceResponse.dto";

export class ProductControllerResponseDTO {
  @ApiProperty({ description: 'Product Description' })
  description: string;

  @ApiProperty({ name: 'Product Name' })
  name: string;

  @ApiProperty({ name: 'Manufacturer id' })
  readonly manufacturerId?: string;

  @ApiProperty({ name: 'Manufacturer name' })
  readonly manufacturerName?: string;

  @ApiProperty({ name: 'Product Id' })
  productId: string;

  public constructor(
    description: string,
    name: string,
    productId: string,
    manufacturerId?: string,
    manufacturerName?: string) {
    this.description = description
    this.name = name
    this.productId = productId
    this.manufacturerId = this.manufacturerId
    this.manufacturerName = this.manufacturerName
  }

  public static fromProductServiceResponseDTO(productResponseDTO: ProductServiceResponseDTO): ProductControllerResponseDTO {
    return new ProductControllerResponseDTO(
      productResponseDTO.description,
      productResponseDTO.name,
      productResponseDTO.productId,
      productResponseDTO.manufacturerId,
      productResponseDTO.manufacturerName)
  }
}