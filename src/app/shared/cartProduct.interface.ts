import { product } from "../category/product.interface";

export interface cartProduct extends product{
    itemCount?:number
}