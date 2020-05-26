module.exports = (sequelize, DataTypes) => {
    const SavedTest = sequelize.define('SavedTest', {})

    SavedTest.associate = function (models) {
        SavedTest.belongsTo(models.User)
        SavedTest.belongsTo(models.Test)
    }
    return SavedTest
}