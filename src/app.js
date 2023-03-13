const express = require('express');

const app = express();
const loginRoutes = require('./routes/login');
const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const postRouter = require('./routes/post');

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
