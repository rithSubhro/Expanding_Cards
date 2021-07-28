const panels = document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActiveClass(panels);
        panel.classList.add('activate');
    })
})

function removeActiveClass(panels){
    panels.forEach(panel =>{
        panel.classList.remove('activate');
    })
}