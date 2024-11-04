import { ProductServiceRequestDTO } from "../../service/model/productServiceRequest.dto";

export class ProductPortRequestDTO {
  name: string;
  description: string;

  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }

  public static fromProductServiceRequestDTO(productRequestDTO: ProductServiceRequestDTO): ProductPortRequestDTO {
    return new ProductPortRequestDTO(productRequestDTO.name, productRequestDTO.description)
  }
}