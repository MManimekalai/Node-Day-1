const express = require("express");
const NODE_SERVER = express();
const APP_Server = require("./appServer");


const PORT = 4000;

NODE_SERVER.use('/', APP_Server)


try{
NODE_SERVER.listen(PORT, 'localhost', ()=> {
console.log("Server Started", PORT);
});
} catch (error) {
console.log("Error Occured", error)
}