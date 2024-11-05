import { ProductPortRequestDTO } from "src/product/core/ports/model/productPortRequest.dto";

/**
 * Entity corresponds to the schema defined in Prisma file
 */
export class ProductEntity {
  public constructor(
    description: string,
    name: string,
    productId: string,
    manufacturerId?: number,
    id?: number,
    createdAt?: Date) {

    this.createdAt = createdAt
    this.description = description
    this.id = id
    this.manufacturerId = manufacturerId
    this.name = name
    this.productId = productId
  }

  createdAt: Date;
  description: string;
  id: number;
  manufacturerId?: number;
  name: string;
  productId: string;

  public static fromProductPortRequestDTO(productPortRequestDTO: ProductPortRequestDTO): ProductEntity {
    return new ProductEntity(
      productPortRequestDTO.description,
      productPortRequestDTO.name,
      productPortRequestDTO.productId,
      productPortRequestDTO.manufacturerId)
  }
}

/*export class ProductCreateDTO {
  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
  name: string;
  description: string;
}*/