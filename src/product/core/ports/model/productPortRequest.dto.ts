import { ProductServiceRequestDTO } from "../../service/model/productServiceRequest.dto";

export class ProductPortRequestDTO {
  description: string;
  name: string;
  manufacturerId?: string;
  productId: string;

  public constructor(
    description: string, 
    name: string, 
    productId: string, 
    manufacturerId?: string) {
    this.description = description
    this.name = name
    this.manufacturerId = manufacturerId
    this.productId = productId
  }

  public static fromProductServiceRequestDTO(productServiceRequestDTO: ProductServiceRequestDTO): ProductPortRequestDTO {
    return new ProductPortRequestDTO(
      productServiceRequestDTO.description, 
      productServiceRequestDTO.name, 
      productServiceRequestDTO.productId, 
      productServiceRequestDTO.manufacturerId)
  }
}