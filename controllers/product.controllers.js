const Product = require('../models/product.model');

module.exports = {
    create(request, h) {
        const productData = {
            title: request.payload.title,
            qty: request.payload.qty,
            price: request.payload.price
        };
        return Product
            .create(productData)
            .then((product) => {
                return {message: "Product created succesfully", product: product};
            })
            .catch((err) => {
                return {err: err};
            });
    },
    find(request, h) {
        return Product
            .find({})
            .exec()
            .then((product) => {
                return {product: product};
            })
            .catch((err) => {
                return {err: err};
            });
    },
    findOne(request, h) {
        return Product
            .findOne({_id: request.params.id})
            .exec()
            .then((product) => {

                if (!product) 
                    return {message: 'Product not Found'};
                
                return {product: product};

            })
            .catch((err) => {

                return {err: err};

            });
    },
    update(request, h) {
        return Product
            .findOne({_id: request.params.id})
            .exec()
            .then((product) => {
                if (!product) 
                    return {err: 'Product not found!'};
                
                product.title = request.payload.title;
                product.qty = request.payload.qty;
                product.price = request.payload.price;

                product.save(product);
            })
            .then((data) => {
                return {message: "Product data updated succesfully!"};
            })
            .catch((err) => {
                return {err: err};
            });
    },
    delete(request, h) {
        return Product
            .findOne({_id: request.params.id})
            .exec()
            .then((err, product) => {
                if (err) 
                    return {dberror: err};
                if (!product) 
                    return {message: 'Product not found'};
                
                product.remove((err) => {
                    if (err) 
                        return {dberror: err}
                    return {success: true};
                });
            });
    }
}