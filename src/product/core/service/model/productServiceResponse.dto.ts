export class ProductServiceResponseDTO {
  name: string;
  description: string;

  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
}