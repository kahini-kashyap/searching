const fs = require("fs");

function checker(str){
    let data = fs.readFileSync("example.txt").toString();
    if(data.includes(str)){
        return true;
    }
    else{
        return false;
    }

}

console.log(checker("Node.js"));