// all wallpaper images
const wallpaperimg = document.querySelector('.wallpaper-img');
//all images used are clicked by me
const images = ['image-1.png', 'image-2.png','image-3.png', 'image-4.png', 'image-5.png','image-6.png', 'image-7.png', 'image-8.png','image-9.png', 'image-10.png', 'image-11.png','image-12.png', 'image-13.png', 'image-14.png','image-15.png', 'image-16.png']

let i = 0;

//dark-light mode
const bodyElem=document.querySelector("body")

// buttons code
const previousElem=document.querySelector(".previous")
const nextElem=document.querySelector(".next")
previousElem.addEventListener("click",prev)
nextElem.addEventListener("click",next)
console.log(previousElem,nextElem)

//previous button
function prev(){
    if(i <= 0) 
    i = images.length;
    i--;
    return allImgs();

}
//next button
function next(){
    if(i >= images.length - 1) i = -1;
    i++;
    return allImgs();

}
//move through all images
function allImgs(){
    return wallpaperimg.setAttribute('src', 'wallpapers/' + images[i]);
}


// Dark-Light Theme
var mode = document.getElementById('modebutton');

function sun(){
    bodyElem.style.background = "#e9ecef"
}
function moon(){
    bodyElem.style.background="#212529"
}



