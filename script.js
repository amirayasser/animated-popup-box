var box = document.querySelector('#box');
var btn = document.querySelector('button');
var content = document.querySelector('.content')





btn.onclick = function (){
content.classList.toggle( 'active')
btn.classList.toggle('toggleBtn')
box.classList.toggle('s-or-h')

}



