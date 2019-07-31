/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

let expect = require('chai').expect;
let ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      if(initNum === "Invalid Number"){
        if(initUnit === "Invalid Unit"){
          res.send("Inavalid number and unit");
        }
        res.send("Invalid Number");
      }
      if(initUnit === "Invalid Unit"){
        res.send("Invalid Unit");
      }
    
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({'InitNum': initNum, 'initUnit': initUnit, 'returnNum': returnNum, 'returnUnit': returnUnit, 'string': toString})
    });
    
};
