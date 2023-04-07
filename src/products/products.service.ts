import { ProductDocument } from './schema/products.schema';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


export class ProductsService {
  productModel: any

  constructor(@InjectModel(Product.name) productModel: Model<ProductDocument>) {
      this.productModel = productModel;
    }

  async create(createProductDto: CreateProductDto) {
    const result = await this.productModel.create(createProductDto)
    return result
  }

  async findAll() {
    const product = await this.productModel.find().exec()
    return product;
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).exec();
    return product;
  }

  async update(id: string) {
  const findProduct = await this.productModel.findById(id).exec();
  findProduct.hasStock = false;
  const updatedProduct = await findProduct.save();
  return updatedProduct;
}

  async remove(id: string) {
    const result = await this.productModel.findByIdAndRemove(id).exec();
    return result
  }

}
