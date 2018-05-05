const ProductController = require('../controllers/product.controllers');
module.exports = [
    {
        path: '/api/products',
        method: 'POST',
        handler: ProductController.create
    }, {
        path: '/api/products',
        method: 'GET',
        handler: ProductController.find
    }, {
        path: '/api/products/{id}',
        method: 'GET',
        handler: ProductController.findOne
    }, {
        path: '/api/products/{id}',
        method: 'PUT',
        handler: ProductController.update
    }, {
        path: '/api/products/{id}',
        method: 'DELETE',
        handler: ProductController.delete
    }
];