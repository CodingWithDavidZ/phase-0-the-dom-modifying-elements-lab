// Write your code here!
document.querySelector('main').remove()
const newHeader = document.createElement('h1')
newHeader.id = "victory";
document.body.appendChild(newHeader);
newHeader.innerHTML = '<h1>David is the champion<h1>'