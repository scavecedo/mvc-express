const path = require("path");

let main = {
    home: function(req,res){
        res.sendFile(path.resolve(__dirname,"../views/home.html"));
    }
}


module.exports = main;