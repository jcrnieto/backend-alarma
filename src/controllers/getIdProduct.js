const { Products } = require ("../db")

const getIdProduct = async ( req, res ) => {
    const productId = req.params.id;
    
    try {
       const product = await Products.findByPk(productId); 

       if (!product) {
          return res.status(404).json({ error: 'Producto no encontrado' });
      }
  
      res.status(200).json(product);
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getIdProduct,
};