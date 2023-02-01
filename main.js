var menu_icon = document.getElementById('menu_icon');

var menu = document.getElementById('menu');

menu_icon.addEventListener('click',()=>{
    if(menu.className === 'hidden'){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
});

var filter_icon = document.getElementById('filter_icon');
var filters = document.getElementById('filter');

filter_icon.addEventListener('click',()=>{
    if (filters.className === 'hidden') {
        filters.classList.remove('hidden');
    }else{
        filters.classList.add('hidden');
    }
});