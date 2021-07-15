const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.post('/api/product', ProductController.createNewProduct);
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/people/:id', ProductController.deleteProduct);
}