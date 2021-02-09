const Menu = require('../models/Menu');

const getAllMenus = (req,res) => {
    Menu.find()
        .sort("-createdAt")
        .exec((err,menus) =>{
        if(err || !menus){
            return res.json({error : "No data"})
        }
        res.json({menus});
    });
};

const menuById = (req,res) => {
    Menu.findById(req.params.id)
    .then(menu =>{
        
        res.json({menu});
    }).catch(err => console.log(err));
}


module.exports = {
    getAllMenus,
    menuById,
}