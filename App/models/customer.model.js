module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      Nama: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      No_handphone: {
        type: Sequelize.STRING
      },
      Alamat: {
        type: Sequelize.STRING
      }
    });
  
    return Customer;
  };