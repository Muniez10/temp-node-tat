// GLOBALS - NO WINDOW

//_dirname - path to current directory
//_filename - file name
//require - function to use modules (commonJS)
//module - info about current module(file)
//process - info about env where the program is being executed

const _dirname = require('path')
console.log(_dirname)
setInterval(() => {
    console.log('hello world')
,1000})