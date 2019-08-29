const helloTitleTag = document.createElement('h1');
const helloText = document.createTextNode('Hello World - Vanilla Cookbook'); // Create a text node
helloTitleTag.appendChild(helloText);
document.querySelector('body').appendChild(helloTitleTag);
