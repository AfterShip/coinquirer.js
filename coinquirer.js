'use strict';

var inquirer = require("./lib/inquirer");
class Coinquirer {
  constuctor() {

  }

  prompt(question){
    question.name = "answer";
    return new Promise(function(resolve, reject){
      inquirer.prompt([question], function(ans){
        return resolve(ans["answer"]);
      })
    });
  }
}

module.exports = Coinquirer;
