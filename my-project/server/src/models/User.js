module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING, 
      unique: true //makes every value different
    }, 
    password: DataTypes.STRING
  })
