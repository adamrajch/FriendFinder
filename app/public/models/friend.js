module.exports = function (sequelize, DataTypes) {
    var Friends = sequelize.define("Friends", {

        name: DataTypes.STRING,
        photo: DataTypes.STRING,
        scores: DataTypes.STRING

    });
    return Friends;
};