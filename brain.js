// CODE FOR THE HAMBURGER NAVBAR
var navlinks=document.querySelector("nav");
var closebtn=document.querySelector(".toggleoff");
var openbtn=document.querySelector(".hamburger");
function Toggle()
{
    if(navlinks.style.display=="none")
    {
        navlinks.style.display="block";
        openbtn.classList.add('toggle--hamburger');

    }
    else
    {
        navlinks.style.display="none";
        openbtn.classList.remove('toggle--hamburger');

    }
}



//Portfolio Page
let Showbtn=document.querySelectorAll(".ShowMore");
let Content=document.querySelectorAll(".detailcontainer");





Showbtn[1].addEventListener("click",()=>{
    Content[1].classList.toggle("hidden");
  });

  
  Showbtn[0].addEventListener("click",()=>{
    Content[0].classList.toggle("hidden");
  });

