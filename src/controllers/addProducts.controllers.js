const { Products } = require ("../db")

const addProducts = async ( req, res ) => {

    const { firebaseUrl } = req.file ? req.file : "";
    const { name, description } = req.body;
    // console.log('firebaseurl',firebaseUrl)
    try {
        const newProduct = await Products.create({
            name,
            image: firebaseUrl,
            // image,
            description,
           
          });
          //console.log('newproduct',newProduct)
          res.status(201).json(newProduct);
         

    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }

    
}

module.exports = {
    addProducts,
};
  