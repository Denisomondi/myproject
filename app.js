const sections = document.querySelectorAll( '.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('control');
const allsections= document .querySelectorAll( 'main-content')


function pageTransition( ){
    //button click active closs
    for(let i =0; i < secBtn.length; i++){
        secBtn[i] .addEventListener('click', function(){ 
            let currentBtn = document.querySelectorAll( '.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn,);
            this.className += ' active-btn';
        })

//section Active
allsections.addEventListener('click', (e) =>{
    const id = e.terget.dataset.id;
    if(id{
        //remove selected from the other btns
        secBtns.forEach((btn) =>{
            btn.classList,remove('active')

        })
    }) 
    e.terget,classList.add('active')
    //hide sections
    Selection.classList.remove('active')
})
const element = document.getElementById(id);
element.classList.add('active')
})
            pageTransitions();

        
    }

    function myFunction(x) {
        x.classList.toggle("fa-thumbs-down");
      } 

}