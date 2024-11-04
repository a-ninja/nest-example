import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'src', 'schemas'), // Path to the schemas folder
    serveRoot: '/schemas/', // URL prefix for the schema
  }),
    ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
