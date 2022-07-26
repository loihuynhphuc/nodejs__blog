const express = require('express')
const path = require('path');
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const route = require("./routes");
const app = express()
const port = 3000
// app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
// create folder/file static
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'resource\\views'));
// middlewrare
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
route(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
