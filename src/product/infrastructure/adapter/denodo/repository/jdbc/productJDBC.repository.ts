import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ProductPortResponseDTO } from "src/product/core/ports/model/productPortResponse.dto";
import { ProductEntity } from "../../entity/product.entity";
import { ProductRepository } from "../ProductRepository";
import { Collection } from "scl"
import { create } from "domain";

@Injectable()
export class JDBCProductRepository extends PrismaClient implements OnModuleInit, ProductRepository {
  async onModuleInit() {
    await this.$connect();
  }

  async createItem(data): Promise<ProductEntity> {
    console.log("JDBCProductRepository: creating product", data);
    return await this.product.create({ data: data }).then((element) => {
      console.log("JDBCProductRepository: created product", element)
      return new ProductEntity(element.id, element.name, element.description, element.createdAt)
    });
  }

  async findAll(): Promise<Collection<ProductEntity>> {
    console.log("JDBCProductRepository: findAll")
    // const itemList = Collection<ProductPortResponseDTO>()
    const products = await this.product.findMany().then((products) => {
      console.log("JDBCProductRepository: findMany", products)
      const productMap = products.map((element) => {
        return new ProductEntity(element.id, element.name, element.description, element.createdAt)
      })
      return productMap
    });
    console.log("returning blah", products)
    return products
  }
}