const express = require("express");
const APP_Server = express();
const bodyparser = require("body-parser");

APP_Server.use(bodyparser.urlencoded({extended: true}));
APP_Server.use(bodyparser.json());




// const CountriesRouter = require("./Controllers/Countries.controller");
const FilesRouter = require("./Controllers/files.controllers");


// APP_Server.use('/countries', CountriesRouter );
APP_Server.use('/fileSystem', FilesRouter );
module.exports = APP_Server;