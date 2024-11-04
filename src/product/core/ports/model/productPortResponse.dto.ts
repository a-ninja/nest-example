import { ProductServiceResponseDTO } from "../../service/model/productServiceResponse.dto";

export class ProductPortResponseDTO {
  name: string;
  description: string;

  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }

  public toProductServiceResponseDTO(): ProductServiceResponseDTO {
    return new ProductServiceResponseDTO(this.name, this.description)
  }
}