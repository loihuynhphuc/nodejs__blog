class NewsControllor{

     //[GET] /news/slug
     show(req,res){
        res.send("News detail");
     }
    // [GET] / news
    index(req,res){
        res.render("news");
    }
   
}
module.exports = new NewsControllor;