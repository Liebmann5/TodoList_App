import { ITodo } from "./../types/todo"
import { model, Schema } from "mongoose"

//???????????????????????????????????????????????
// What the heck is this syntax???
//???????????????????????????????????????????????
const todoSchema: Schema = new Schema(
    {
        //??Why are we defining these variables again??
        //?We already defined them in types!?!?!?
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        status: {
            type: Boolean,
            required: true,
        },
    },

    { timestamps: true }
);


export default model<ITodo>("Todo", todoSchema);


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//In boilerplate-mongomongoose.person.js we are making a "schema"!!!
//BUT here we are making an "interface" which is different!!!
//Check the ChaptGPT Notes! I asked the differences AND I"M FAIRLY
//CERTAIN THAT WE ARE SEEING THE DIFFERENCES DESCRIBED HERE!!!
//      {person.js vs todo.ts}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
