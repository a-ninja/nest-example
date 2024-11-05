export class ProductServiceRequestDTO {
  readonly description: string;
  readonly name: string;
  readonly manufacturerId?: string;
  readonly productId: string;

  public constructor(
    description: string,
    name: string,
    productId: string,
    manufacturerId?: string) {
    this.description = description
    this.name = name
    this.productId = productId
    this.manufacturerId = manufacturerId
  }
}