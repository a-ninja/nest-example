import { ApiProperty } from "@nestjs/swagger";
import { ProductServiceRequestDTO } from "src/product/core/service/model/productServiceRequest.dto";
import { ProductServiceResponseDTO } from "src/product/core/service/model/productServiceResponse.dto";

export class ProductControllerRequestDTO {
  @ApiProperty({ description: 'Product description' })
  readonly description: string;

  @ApiProperty({ name: 'Product name' })
  readonly name: string;

  @ApiProperty({ name: 'Manufacturer id' })
  readonly manufacturerId: number;

  @ApiProperty({ name: 'Product identifer' })
  readonly productId: string;

  public toProductServiceRequestDTO(): ProductServiceRequestDTO {
    console.log(`name = ${this.name}, description = ${this.description}, manufacturerId = ${this.manufacturerId}`)
    return new ProductServiceRequestDTO(
      this.description,
      this.name,
      this.productId,
      this.manufacturerId,
    )
  }
}