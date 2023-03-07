const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    tableName: 'users',
    underscored: true, // snake_case e camelCase
    timestamps: false, // Não gera a createdAt e updatedAt (data de criação e ultima atualização, em migrations)
  });
  // UserTable.removeAttribute('id');
  return UserTable;
};


module.exports = UserSchema;
