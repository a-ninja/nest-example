import { Injectable } from "@nestjs/common";
import { ProductEntity } from "../../entity/product.entity";
import { ProductRepository } from "../ProductRepository";

// @Injectable()
// export class RestQueryRepository extends QueryRepository {

//   findById(queryId:String): QueryEntity {
//     throw new Error("Method not implemented by JDBCQueryRepository");
//   }

//   executeReadQuery(query:String): QueryEntity {
//     throw new Error("Method not implemented by RestQueryRepository");
//   }
// }