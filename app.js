const path = require('path');
const express = require('express');
const authRoutes = require('./routes/auth.routes')
const homeRoutes = require('./routes/home.routes')
const app = express();
app.set('view engine', 'ejs') 
app.set('views' ,path.join(__dirname , 'views')  )
app.use(express.static('public'))
app.use(homeRoutes);
app.use(authRoutes);
app.listen(3000);