const newRouter = require("./news");
const siteRouter = require("./site");


function route(app){

    app.use('/news', newRouter);
    app.use("/",siteRouter)

    // app.get('/home', (req, res) => {
    //     res.render('home');
    //   });

    //   app.get('/search', (req, res) => {
    //     res.render('search');
    //   });
      
}

module.exports = route;