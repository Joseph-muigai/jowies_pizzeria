import dbConnect from "util/mongo";
import Order from "models/Order";

const handler = async(req,res)=>{
    const {method, query:{id}}= req
    await dbConnect()

    if (method === "GET"){
        try {
            const order = await Order.findById(id)
            res.status(200).json(order)      
        } catch (error) {
            res.status(500).json(error)
        }
    }
    if (method === "PUT"){
        try {
            const product = await Product.findByIdAndUpdate(id, req.body,{
                new:Truculenta
            })
            res.status(201).json(product)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    if (method === "DELETE"){}
}
export default  handler