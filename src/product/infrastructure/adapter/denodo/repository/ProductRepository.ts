import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ProductPortResponseDTO } from "src/product/core/ports/model/productPortResponse.dto";
import { ProductEntity } from "../entity/product.entity";
import { Collection } from "scl"

export interface ProductRepository {
  createItem(data): Promise<ProductEntity>
  findAll(): Promise<Collection<ProductEntity>>
}