"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
//???????????????????????????????????????????????
// What the heck is this syntax???
//???????????????????????????????????????????????
var todoSchema = new mongoose_1.Schema({
    //??Why are we defining these variables again??
    //?We already defined them in types!?!?!?
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, { timestamps: true });
exports["default"] = (0, mongoose_1.model)("Todo", todoSchema);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//In boilerplate-mongomongoose.person.js we are making a "schema"!!!
//BUT here we are making an "interface" which is different!!!
//Check the ChaptGPT Notes! I asked the differences AND I"M FAIRLY
//CERTAIN THAT WE ARE SEEING THE DIFFERENCES DESCRIBED HERE!!!
//      {person.js vs todo.ts}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
