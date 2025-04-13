const path = require('path');
const express = require('express');
const csurf = require('csurf');
const db = require('./data/database');
const addCsurfMiddleware = require('./middlewares/csurf-token')
const errorHandlingMiddleware = require('./middlewares/error-handling');

const authRoutes = require('./routes/auth.routes')
const homeRoutes = require('./routes/home.routes')
const app = express();
app.set('view engine', 'ejs') 
app.set('views' ,path.join(__dirname , 'views')  )
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use(csurf());
app.use(addCsurfMiddleware);
app.use(homeRoutes);
app.use(authRoutes);
app.use(errorHandlingMiddleware)
db.connectToDatabase()
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log('Failed to Connect');
    console.log(error);
  });