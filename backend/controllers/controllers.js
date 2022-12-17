const recipesDAO = require("../models/recipesModel");
const recipes = new recipesDAO({filename: "recipes.db", autoload: true});
const menuDAO = require("../models/menuModel");
const menu = new menuDAO({filename: "menu.db", autoload: true});

exports.newList = function (req, res) {
    recipes.init();
    res.redirect("/");
};
exports.listRecipes = function (req, res){
    recipes.getAllEntries()
        .then((list) => {
            res.json(list);
            console.log(list);
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};
exports.listMenu = function (req, res){
    menu.getAllEntries()
        .then((list) => {
            res.json(list);
            //console.log(list);
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};
exports.addMenuItem = function (req, res){
    console.log("req body to add to database : ", req.body);
    menu.addEntry(req.body).catch((err) => {
        console.log("promise rejected", err);
      });
      res.redirect("/");
};
