"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./circle");
var rectangular_1 = require("./rectangular");
var obj = new circle_1.Circle(2);
obj.myarea();
obj.display();
var rectObj = new rectangular_1.Rectangle(2, 3);
rectObj.myarea();
rectObj.display();