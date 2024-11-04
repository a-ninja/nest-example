import { ApiProperty } from "@nestjs/swagger";
import { ProductServiceResponseDTO } from "src/product/core/service/model/productServiceResponse.dto";

export class ProductControllerResponseDTO {
  @ApiProperty({ description: 'Product Description' })
  description: string;
  @ApiProperty({ name: 'Product Name' })
  name: string;

  public constructor(name:string, description: string) {
    this.name = name
    this.description = description
  }

  public static fromProductServiceResponseDTO(productResponseDTO: ProductServiceResponseDTO): ProductControllerResponseDTO {
    return new ProductControllerResponseDTO(productResponseDTO.name, productResponseDTO.description)
  }
}