import { ProductServiceResponseDTO } from "../../service/model/productServiceResponse.dto";

export class ProductPortResponseDTO {
  description: string;
  name: string;
  manufacturerId?: string;
  manufacturerName?: string;
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
    this.manufacturerId = manufacturerId
    this.manufacturerName = manufacturerName
  }

  public toProductServiceResponseDTO(): ProductServiceResponseDTO {
    return new ProductServiceResponseDTO(
      this.description,
      this.name,
      this.productId,
      this.manufacturerId,
      this.manufacturerName)
  }
}