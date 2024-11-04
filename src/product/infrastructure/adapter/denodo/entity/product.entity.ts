import { ProductPortRequestDTO } from "src/product/core/ports/model/productPortRequest.dto";

/**
 * Entity corresponds to the schema defined in Prisma file
 */
export class ProductEntity {
  public constructor(name: string, description: string, id?: number, createdAt?: Date) {
    this.id = id
    this.name = name
    this.description = description
    this.createdAt = createdAt
  }
  id: number;
  name: string;
  description: string;
  createdAt: Date;

  public static fromProductPortRequestDTO(productPortRequestDTO: ProductPortRequestDTO): ProductEntity {
    return new ProductEntity(productPortRequestDTO.name, productPortRequestDTO.description)
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