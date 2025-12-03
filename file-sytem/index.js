const fs =require('fs');
const path =require('path')


// Function to read a file
const datafolder = path.join(__dirname,"data");



if(!fs.existsSync(datafolder)){
    fs.mkdirSync(datafolder);
}


const filepath = path.join(datafolder,"example.txt")

if(!fs.existsSync(filepath)){
    fs.writeFileSync(filepath,"this is an example file");
}


const  readfile =fs.readFileSync(filepath,"utf-8")
console.log(readfile);

// console.log(datafolder);
