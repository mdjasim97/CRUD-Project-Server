const productModel = require("../../Model/ProductModel")


// Products Create Functions 
exports.ProductCreate = async (req, res) => {
    const productsData = req.body
    // console.log(productsData);
    try {
        const result = await productModel?.create(productsData)
        res.status(200).send({ status: "successful", message: result })
    } catch (err) {
        return res.status(401).send({ status: 'something is wrong', Error: err.toString() })
    }
}



// All Products Read Functions 
exports.ProductsRead = async (req, res) => {

    try {
        const query = {}
        const projection = 'ProductName Img UnitPrice Qty TotalPrice'
        const result = await productModel.find(query, projection)
        res.status(201).send({ status: "success", message: result })
    } catch (error) {
        res.status(404).send({ status: '404 Not found data', error })
    }
}



// Products Update Functions 
exports.ProductUpdate = async (req, res) => {

    try {
        const id = req.params.id
        const productUpdateData = req.body
        const query = { _id: id }
        const options = { upsert: true }
        const result = await productModel.updateOne(query, productUpdateData, options)
        res.status(200).send({ status: "success", message: result })
    } catch (error) {
        res.status(404).send({ status: 'Something is wrong.', error })
    }
}


// Products Delete Functions 
exports.ProductDelete = async (req, res) => {

    try {
        const id = req.params.id
        const query = { _id: id }
        const result = await productModel.deleteOne(query)
        res.status(200).send({ status: "success", message: 'Product Delete Successful.', data: result })
    } catch (error) {
        res.status(404).send({ status: 'Something is wrong.', error })
    }
}