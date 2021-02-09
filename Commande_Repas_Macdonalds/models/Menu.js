const mongoose = require('mongoose');


const menuSchema = mongoose.Schema({
    nameMenu : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    boissons : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    sandwich : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    petitesFaim : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    salade : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    dessert : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    frite : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    sauces : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    cafe : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgMenu : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgBoissons : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgSandwich : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgPetitesFaim : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgSalade : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgDessert : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgFrite : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgSauces : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    imgCafe : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    },
    descriptionMenu : {
        type : String,
        required : true,
        minLength : 4,
        maxLength : 150
    }


},{
    timestamps : true
})
module.exports = mongoose.model('Menu',menuSchema);