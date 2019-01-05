'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    albumName: DataTypes.STRING,
    albumYear: DataTypes.INTEGER,
    artistId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};