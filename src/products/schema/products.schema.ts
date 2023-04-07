import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>
@Schema()
export class Product {
    @Prop({ required: true, unique: true})
    name: string;
    @Prop({required: true})
    price: number;
    @Prop({required: true})
    hasStock: boolean;
}

export const ProductModel = SchemaFactory.createForClass(Product)
