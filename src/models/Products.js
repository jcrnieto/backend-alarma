const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

 sequelize.define('products', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
});
};

