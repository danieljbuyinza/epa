
// Requiring needed packages
const express = require("express")
const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"))
app.use(bodyParser.urlencoded({ extended: true }))
// setting the static folder
app.use(express.static(path.join(__dirname, 'public')));



// route
app.get('/', (req, res)=> {
    res.render('test')
});
app.get("/register", (req, res) => {
    res.render("register");
})

//  Listening for requests: the server
app.listen(5000, ()=>{
    console.log("listening on 5000");
})



//>>>>>>> 6169bf3d5bbc2889b4541d84e15c8e182c072778
