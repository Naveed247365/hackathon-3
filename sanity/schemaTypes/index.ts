import { type SchemaTypeDefinition } from 'sanity'
import product from '@/sanity/schemaTypes/product'
import orders from './orders'
// import shippingForm from './shippingForm'
import contactForm from "./contact"
import review from './review'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,contactForm,orders,review],
}