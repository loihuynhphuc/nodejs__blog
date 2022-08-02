class siteControllor{

    //[GET] /home/slug
    show(req,res){
       res.send("News detail");
   }

   // [GET] / home
   index(req,res){
       res.render("home");
   }
  
   
   // [GET] / search
   search(req,res){
    res.render("search");
}

}
module.exports = new siteControllor;