/**
 * Entity corresponds to the schema defined in Prisma file
 */
export class ProductEntity {
  public constructor(id: number, name: string, description: string,  createdAt: Date) {
    this.id=id
    this.name = name
    this.description = description
    this.createdAt = createdAt
  }
  id: number;
  name: string;
  description: string;
  createdAt: Date;
}

export class ProductCreateDTO {
  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
  name: string;
  description: string;
}