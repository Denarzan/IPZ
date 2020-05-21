module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    subject: DataTypes.STRING,
    teacher: DataTypes.STRING,
    author: DataTypes.STRING,
    topic: DataTypes.STRING,
    numofquestions: DataTypes.INTEGER,
    tab: DataTypes.TEXT
  })

  return Test
}
