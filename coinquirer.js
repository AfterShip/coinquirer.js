'use strict';

var inquirer = require("./lib/inquirer");
class Coinquirer {
  constuctor() {

  }

  prompt(question){
    return new Promise(function(resolve, reject){
      inquirer.prompt([question], function(ans){
        return resolve(ans);
      })
    });
  }
}

module.exports = Coinquirer;
