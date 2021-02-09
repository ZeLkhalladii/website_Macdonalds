const { json } = require("express");
const express = require("express");
const app = express();



const mongoose = require('mongoose');
const {menuRoutes} = require("./routes/routes");

const axios = require("axios");

const bodyParser = require('body-parser');


const exphbs = require("express-handlebars");

//set temlate engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const path = require("path");
app.use(express.static(path.join(__dirname,'public')));

//add body parser middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

const port = 3000;
const url = "mongodb+srv://admin:admin@cluster0.iutbg.mongodb.net/menusMultilingue?retryWrites=true&w=majority";

//connect to database
mongoose
    .connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connected"))
    .catch(err => console.log(err));


//use menu routes
app.use("/",menuRoutes);


//get all menu
app.get("/" , async function (req,res){
    try {
        res.render("choixLangue");
    } catch (error) {
        console.log(error)
    }
});

app.get("/modeCommande" , async function (req,res){
    try {
        res.render("modeCommande");
    } catch (error) {
        console.log(error)
    }
});

app.get("/home" , async function (req,res){
    try {
        const response = await axios.get("http://localhost:3000/menus");
        res.render("home",{ menus : response.data.menus});
    } catch (error) {
        console.log(error)
    }
});

app.get("/panier" , async function (req,res){
    try {
        res.render("panier");
    } catch (error) {
        console.log(error)
    }
});


app.get("/product_menu/:type/:id", async (req,res) => {
    var type = req.params.type;
    try {
        const response = await axios.get(
            `http://localhost:3000/menu/${req.params.id}`
        );
        if(type=="nameMenu"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.nameMenuFR , menuAN : response.data.menu.nameMenuAN ,menuAR : response.data.menu.nameMenuAR ,chemin_img : "imagesmenus/large_image" , img : response.data.menu.imgMenu , prix : response.data.menu.prixMenu });
        }
        if(type=="boissons"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.boissonsFR , menuAN : response.data.menu.boissonsAN , menuAR : response.data.menu.boissonsAR ,chemin_img : "images_Boissons/large_image" , img : response.data.menu.imgBoissons , prix : response.data.menu.prixBoissons });
        }
        if(type=="sandwich"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.sandwichFR , menuAN : response.data.menu.sandwichAN , menuAR : response.data.menu.sandwichAR , chemin_img : "Images_Sandwichs/large_image" , img : response.data.menu.imgSandwich , prix : response.data.menu.prixSandwich });
        }
        if(type=="petitesFaim"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.petitesFaimFR , menuAN : response.data.menu.petitesFaimAN , menuAR : response.data.menu.petitesFaimAR , chemin_img : "images_Petites_Faims/large_image" , img : response.data.menu.imgPetitesFaim , prix : response.data.menu.prixPetitesFaim });
        }
        if(type=="salade"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.saladeFR , menuAN : response.data.menu.saladeAN , menuAR : response.data.menu.saladeAR , chemin_img : "images_Salades/large_image" , img : response.data.menu.imgSalade , prix : response.data.menu.prixSalade });
        }
        if(type=="dessert"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.dessertFR , menuAN : response.data.menu.dessertAN , menuAR : response.data.menu.dessertAR , chemin_img : "images_Desserts/large_image" , img : response.data.menu.imgDessert , prix : response.data.menu.prixDessert });
        }
        if(type=="frite"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.friteFR , menuAN : response.data.menu.friteAN , menuAR : response.data.menu.friteAR , chemin_img : "menus_Frites/large_image" , img : response.data.menu.imgFrite , prix : response.data.menu.prixFrite });
        }
        if(type=="sauces"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.saucesFR , menuAN : response.data.menu.saucesAN , menuAR : response.data.menu.saucesAR , chemin_img : "menus_Sauces/large_image" , img : response.data.menu.imgSauces , prix : response.data.menu.prixSauces });
        }
        if(type=="cafe"){
            res.render("product",{ id : response.data.menu._id , menuFR : response.data.menu.cafeFR , menuAN : response.data.menu.cafeAN , menuAR : response.data.menu.cafeAR , chemin_img : "menus_Cafe/large_image" , img : response.data.menu.imgCafe , prix : response.data.menu.prixCafe });
        }
        
    } catch (error) {
        console.log(error)
    }
});


app.get("/paiement" , async function (req,res){
    try {
        res.render("paiement");
    } catch (error) {
        console.log(error)
    }
});


app.get("/confirmation" , async function (req,res){
    try {
        res.render("confirmation");
    } catch (error) {
        console.log(error)
    }
});




//start server
app.listen(port,() => console.log(`server running at ${port}`));
