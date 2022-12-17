const nedb = require("@seald-io/nedb");

class Menu {
    constructor(menuFilePath) {
      console.log(menuFilePath);
      if (menuFilePath) {
        this.menu = new nedb(menuFilePath);
        console.log("menu connected to " + menuFilePath);
        menuFilePath;
      } else {
        this.menu = new nedb();
      }
    }
  
    getAllEntries() {
      return new Promise((resolve, reject) => {
        this.menu.find({}, function (err, entries) {
          if (err) {
            reject(err);
          } else {
            resolve(entries);
            console.log("function all() returns: ", entries);
          }
        });
      });
    }
  
    addEntry(menu, id) {
      var entry = {
        menu: menu,
        id: id,
      };
      return new Promise((resolve, reject) => {
        this.menu.insert(entry, function (err, doc) {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        });
      });
    }
  }
  module.exports = Menu;