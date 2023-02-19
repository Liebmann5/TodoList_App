"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var cors_1 = require("cors");
var routes_1 = require("./routes");
//Check out this guy's app.ts...    my O.G. below
//https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/#api-with-nodejs-express-mongodb-and-typescript
//const URI: string = 'mongodb+srv://Liebmann5:<password>@cluster0.eihacxg.mongodb.net/?retryWrites=true&w=majority'
var app = (0, express_1["default"])();
var PORT = process.env.PORT || 4000;
app.use((0, cors_1["default"])());
app.use(routes_1["default"]);
//!IMPORTANT! When I used '' its was all registered as text BUT with `` v variables are highlighted!!!??
var URI = "mongodb+srv://".concat(process.env.MONGO_USER, ":").concat(process.env.MONGO_PASSWORD, "@cluster0.eihacxg.mongodb.net/").concat(process.env.MONGO_DB, "?retryWrites=true&w=majority");
var options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1["default"].set("useFindAndModify", false);
mongoose_1["default"]
    .connect(URI, options)
    .then(function () {
    return app.listen(PORT, function () {
        return console.log('Server running on http://localhost:${PORT}');
    });
})["catch"](function (error) {
    throw error;
});
