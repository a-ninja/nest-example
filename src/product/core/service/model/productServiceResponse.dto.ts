export class ProductServiceResponseDTO {
  description: string;
  name: string;
  manufacturerId?: number;
  manufacturerName?: string;
  productId: string;

  public constructor(
    description: string,
    name: string,
    productId: string,
    manufacturerId?: number,
    manufacturerName?: string) {
    this.description = description
    this.name = name
    this.productId = productId
    this.manufacturerId = manufacturerId
    this.manufacturerName = manufacturerName
  }
}