import { Injectable } from "@nestjs/common";
import { ProductControllerRequestDTO } from "../model/productControllerRequest.dto";

@Injectable()
export class ProductRequestDTOValidator {
  public validate(productControllerRequestDTO: ProductControllerRequestDTO): Boolean {
    console.log("ProductRequestDTOValidator.validate")
    return true
  }
}