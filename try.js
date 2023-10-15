// alert("click on window logo");


let windowlogo = document.getElementsByClassName("windowlogo")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let clickthis = document.getElementsByClassName("clickthis")[0]



windowlogo.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "55px"){
        startmenu.style.bottom = "-660px"
        // alert("try file explorer");
    }
    else{
        startmenu.style.bottom = "55px"
        // alert("try file explorer");
    }
})

