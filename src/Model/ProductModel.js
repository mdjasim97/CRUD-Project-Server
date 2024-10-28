const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    ProductName: { type: String },
    ProductCode: { type: String },
    Img: { type: String },
    UnitPrice: { type: String },
    Qty: { type: String },
    TotalPrice: { type: String },
    CreateDate: { type: Date, default: Date.now() }
}, {
    versionKey: false
})


const productModel = mongoose.model('products', DataSchema)
export default productModel