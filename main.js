const h1 = document.getElementsByTagName('h1')
const h2 = document.getElementsByClassName('title-1')
const title = document.getElementById('third-title')
const title1 = document.getAnimations('third-title')
title.textContent = 'new value <b>test</b>'
console.log(h1);
console.log(h1[0]);
console.log(title);
console.log(title1);
console.log(
    document.querySelectorAll('.title')
);
document.querySelectorAll('.title').forEach(item => console.log(item));
const names = ['a', 'b', 'c']
names.length = 0;
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
}
console.log(ul);
console.log(lists);

const button = document.getElementById('btn');
button.addEventListener('click',function(e){
    console.log('Buttona clickle');
})
button.addEventListener('click',function(e){
    console.log(e);
})
const img = document.querySelector('img')
img.addEventListener('load',function(){
    console.log("Image uploaded");
});
const navigate = document.getElementById("navigate").firstElementChild;
console.log(nav5);

const navigatetwo = document.getElementById("navigate").lastElementChild;
console.log(nav6);