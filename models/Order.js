import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength: 60,
    },
    desc:{
        type:String,
        required:true,
        maxlength: 256,
    },
    img:{
        type:String,
        required:true,
        
    },
    prices:{
        type:[Number],
        required: true
    },
    extraOPtions:{
        type:[
            {
                text:{type:String,required:true},
                price:{type:Number,required:true}
            }
        ]
    }

},
{timestamps:true}
)

export default mongoose.models.Order|| mongoose.model("Order", ProductSchema)