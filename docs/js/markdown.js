var marked = require('marked'); //Node library used to handle the markdown to HTML
var fs = require('fs'); //library used to read and write files

var README = fs.readFileSync('../../README.md'); //reads README.md file
fs.writeFileSync('../`../README.html', marked(README)); //Converts README.md file into a HTML file known as "README.html"