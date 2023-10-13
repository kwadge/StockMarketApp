const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 3000;

//Set Handebars Middleware
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const otherstuff = "hello there, this is other stuff!";


// Set Handlebar routes
app.get('/', (req, res) => {
  res.render('home', {
    stuff: otherstuff
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server listening on port ' + PORT));