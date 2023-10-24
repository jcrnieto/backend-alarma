const { Products } = require('../db');

const updateProduct = async (req, res) => {
    const productId = req.params.id; 
    const { name, image, description } = req.body; 

    try {
       
        const product = await Products.findByPk(productId);

        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado.' });
        }

        product.name = name;
        product.image = image;
        product.description = description;

        await product.save();

        res.status(200).json(product); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al modificar el producto.' });
    }
};

module.exports = {
    updateProduct,
};



