const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    underscored: true, // snake_case e camelCase
    timestamps: false, // Não gera a createdAt e updatedAt (data de criação e ultima atualização, em migrations)
  });
  return UserTable;
};

module.exports = UserSchema;
