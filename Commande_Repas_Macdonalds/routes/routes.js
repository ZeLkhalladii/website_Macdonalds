const express = require("express");

const {
    getAllMenus,
    menuById,
} = require ("../controllers/Menu");

const menuRoutes = express.Router();

menuRoutes.get("/menus",getAllMenus);
menuRoutes.get("/menu/:id",menuById);

module.exports = {
    menuRoutes
}