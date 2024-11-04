import { ApiProperty } from "@nestjs/swagger";
import { ProductServiceRequestDTO } from "src/product/core/service/model/productServiceRequest.dto";
import { ProductServiceResponseDTO } from "src/product/core/service/model/productServiceResponse.dto";

export class ProductControllerRequestDTO {
  @ApiProperty({ description: 'Product description' })
  readonly description: string;

  @ApiProperty({ name: 'Product name' })
  readonly name: string;

  public toProductServiceRequestDTO(): ProductServiceRequestDTO {
    console.log("name = ", this.name, "description = ", this.description)
    return new ProductServiceRequestDTO(this.name, this.description)
  }
}