import dbConnect from "../../../../util/mongo"
import Product from "../../../../models/Product"
import { Truculenta } from "@next/font/google"

export default  async function handler(req, res) {
    const {method, query:{id}} = req

    dbConnect()
    if (method === 'GET'){
        try {
            const product = await Product.findById(id)
            res.status(200).json(product)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if(method ==="PUT"){
        try {
            const product = await Product.findByIdAndUpdate(id, req.body,{
                new:true
            })
            res.status(201).json(product)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if(method ==="DELETE"){
        try {
            await Product.findByIdAndDelete(id)
            res.status(201).json("The product has been deleted")
        } catch (error) {
            res.status(500).send(error)
        }
    }
}