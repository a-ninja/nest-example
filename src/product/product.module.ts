import { Module } from '@nestjs/common';

import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { ProductController } from './application/controller/product.controller';
import { ProductService } from './core/service/product.service';
import { ProductServiceImpl } from './infrastructure/product.service.impl';
import { ProductPort } from './core/ports/product.port';
import { DenodoProductAdapter } from './infrastructure/adapter/denodo/denodoProduct.adapter';
import { ProductRequestDTOValidator } from './application/controller/validation/productControllerRequest.validate';
import { JDBCProductRepository } from './infrastructure/adapter/denodo/repository/jdbc/productJDBC.repository';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductService,
      useClass: ProductServiceImpl,
    },
    {
      provide: ProductPort,
      useClass: DenodoProductAdapter,
    },
    {
      provide: 'ProductRepository',
      useClass: JDBCProductRepository,
    },
    ProductRequestDTOValidator,
    ConfigService,
  ],
  exports: [],
})
export class ProductModule { }
