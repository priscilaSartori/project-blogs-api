const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    tableName: 'postCategory',
    underscored: true, 
    timestamps: false, 
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'categoryId', 
      otherKey: 'postId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategoryTable,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
  }

  return PostCategoryTable;
};


module.exports = PostCategorySchema;