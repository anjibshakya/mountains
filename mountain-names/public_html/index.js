/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var uniqueRandomArray = require('unique-random-array');
var mountainNames = require("./mountains.json");
module.exports = {
    all: mountainNames,
    random: uniqueRandomArray(mountainNames)
};

