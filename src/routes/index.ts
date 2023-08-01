import {Router} from 'express'
import {Product } from '../controllers/products'
export const router = Router()

const Products = new Product()

router.get('/',(req,res)=> res.send('Api horti-fruti online').status(200))
router.post('/create',(req,res)=> Products.newProduct(req,res))