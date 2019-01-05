'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    artistName: DataTypes.STRING,
    artistId: DataTypes.INTEGER
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
  };
  return Artist;
};