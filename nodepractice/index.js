const fs=require("fs");
//creating a new file
//fs.writeFileSync('read.txt',"data dena h");

//fs.appendFileSync("read.txt", " we can add to same file file");

//const buf_data=  
//fs.readFileSync("read.txt");
//console.log(buf_data);
//org_data=buf_data.toString();

//console.log(org_data);

//we can rename a file
fs.renameSync("read.txt", "readwrite.txt");

