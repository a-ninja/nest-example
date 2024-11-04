export class ProductServiceRequestDTO {
  readonly name: string;
  readonly description: string;

  public constructor(name: string, description: string) {
    this.name = name
    this.description = description
  }
}