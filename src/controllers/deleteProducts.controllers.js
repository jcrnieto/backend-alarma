const { Products } = require ("../db")

const deleteProducts = async ( req, res ) => {
    const productId = req.params.id;
    
    try {
       const product = await Products.findByPk(productId); 

       if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado.' });
       }

       await product.destroy();

       res.status(204).json({ message: 'Producto eliminado exitosamente.' });
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    deleteProducts,
};