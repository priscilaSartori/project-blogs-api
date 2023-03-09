const CategorySchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: true, // snake_case e camelCase
    timestamps: false, // Não gera a createdAt e updatedAt (data de criação e ultima atualização, em migrations)
  });
  return UserTable;
};

module.exports = CategorySchema;
