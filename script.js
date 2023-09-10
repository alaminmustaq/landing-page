function dropdown(btn,cls){
  let classes = document.querySelector(cls);

  if(classes.classList.contains('max-h-0')){
    classes.classList.remove('max-h-0');
    classes.classList.add('max-h-full');
    btn.classList.add('bg-lime-600')
    btn.classList.remove('bx-chevron-right')
    btn.classList.add('bx-chevron-down')
    btn.classList.add('text-white')
  }
  else{
    classes.classList.add('max-h-0');
    classes.classList.remove('max-h-full');
    btn.classList.remove('bg-lime-600')
    btn.classList.add('bx-chevron-right')
    btn.classList.remove('bx-chevron-down')
    btn.classList.remove('text-white')
  }
}

function switchMenues(to,from,toContent,fromContent){
  let current = document.querySelector(from);

  toContent = document.querySelector(toContent);
  fromContent = document.querySelector(fromContent);

  if(to.classList.contains('before:w-0')){
     to.classList.add('before:w-full');
     to.classList.remove('before:w-0');
     to.classList.add('text-black');
     to.classList.add('bg-neutral-200');
     to.classList.remove('text-neutral-500');
     to.classList.remove('bg-neutral-100');
     toContent.classList.add('opacity-100');
     toContent.classList.remove('opacity-0');

     current.classList.add('before:w-0');
     current.classList.remove('before:w-full');
     current.classList.remove('text-black');
     current.classList.remove('bg-neutral-200');
     current.classList.add('text-neutral-500');
     current.classList.add('bg-neutral-100');
     fromContent.classList.remove('opacity-100');
     fromContent.classList.add('opacity-0');
  }
}
let overlay
overlay = document.querySelector('.overlay');
let sideBar = document.querySelector('.side-bar');
function showSidebar(){
  
  

  if(sideBar.classList.contains('-left-96')){
    sideBar.classList.add('left-0');
    sideBar.classList.remove('-left-96');

    overlay.classList.remove('hidden');
  } 
}

  overlay.addEventListener('click', () =>{
    sideBar.classList.remove('left-0');
    sideBar.classList.add('-left-96');
    console.log("hello");
    overlay.classList.add('hidden');
  })

