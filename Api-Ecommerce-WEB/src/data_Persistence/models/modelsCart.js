import { Schema, model } from "mongoose";

const cartsSchema = new Schema({
    user:{
        type: String
    },
    timestrap:{type: Date, default:Date.now},
    products:[
        {
            type: Object
        }
    ],
    quantity:{
        type: Number
    }
})

export default model("carts", cartsSchema);