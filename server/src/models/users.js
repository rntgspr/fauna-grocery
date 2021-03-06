export default (sequelize, DataType) => sequelize
  .define('Users', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    }
  });
