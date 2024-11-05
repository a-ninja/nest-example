export class ProductServiceRequestDTO {
  readonly description: string;
  readonly name: string;
  readonly manufacturerId?: number;
  readonly productId: string;

  public constructor(
    description: string,
    name: string,
    productId: string,
    manufacturerId?: number) {
    this.description = description
    this.name = name
    this.productId = productId
    this.manufacturerId = manufacturerId
  }
}