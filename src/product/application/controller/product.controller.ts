import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
  Logger,
  Get,
  HttpCode,
} from '@nestjs/common';
import { ProductService } from 'src/product/core/service/product.service';
import { ProductControllerRequestDTO } from './model/productControllerRequest.dto';
import { ProductControllerResponseDTO } from './model/productControllerResponse.dto';
import { ProductRequestDTOValidator } from './validation/productControllerRequest.validate';
import { Collection } from "scl"
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService,
    private readonly productRequestDTOValidator: ProductRequestDTOValidator,
  ) { }

  @Post('/')
  async createProduct(@Body(new ValidationPipe({ transform: true })) requestDTO: ProductControllerRequestDTO): Promise<ProductControllerResponseDTO> {
    //authentication is taken care of by filter
    //authorization is delegated to another component

    //validate request
    this.productRequestDTOValidator.validate(requestDTO)

    //transform ControllerRequest to ServiceRequest
    // console.log("calling requestDTO.toProductServiceRequestDTO");
    console.log("calling requestDTO.toProductServiceRequestDTO, typeof(requestDTO)=", typeof (requestDTO), ", instanceof ProductControllerRequestDTO?=", requestDTO instanceof ProductControllerRequestDTO);
    const productServiceRequestDTO = requestDTO.toProductServiceRequestDTO()

    //call service
    const productServiceResponseDTO = await this.productService.createProduct(productServiceRequestDTO)

    //transform ServiceResponse to ControllerResponse
    return ProductControllerResponseDTO.fromProductServiceResponseDTO(productServiceResponseDTO);
  }

  @Get("/")
  async getProducts(): Promise<Collection<ProductControllerResponseDTO>> {

    const queryResponseDTO = await this.productService
    const allProducts = await this.productService.getProducts()

    const allProducts1 = allProducts.map((product) => {
      return ProductControllerResponseDTO.fromProductServiceResponseDTO(product);
    })
    return allProducts1
  }


  // @Get('query')
  // @HttpCode(HttpStatus.OK)
  execute(): { status: string, test_message: string } {
    return {
      status: 'OK',
      test_message: "Testing, product now"
    };
  }

}