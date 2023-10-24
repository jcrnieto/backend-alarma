const { Products } = require ("../db")

const getProducts = async ( req, res ) => {

    try {
        
        const products = await Products.findAll();
        if (products.length === 0) {
            return res.status(404).json({ error: 'No se encontraron productos.' });
        }

        res.status(200).json(products); 

    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getProducts,
};
  