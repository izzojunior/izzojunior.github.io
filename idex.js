const elementocng = document.querySelector("#muda1"); 
const elementoimg = document.querySelector("#img"); 
const alterar = document.querySelector("#alterar"); 

elementocng.addEventListener("click", ()=>{
    if(elementocng.value == "primeiraMudanca"){
       elementoimg.src = "2.png";  
       alterar.innerText = "Resolução 1080p"; 
       elementocng.value = "segundaMudanca";
    }else if (elementocng.value == "segundaMudanca"){
       elementoimg.src = "3.png";
       alterar.innerText = "Resolução 4k";
       elementocng.value = "terceiraMudanca";
    }else if (elementocng.value == "terceiraMudanca"){
        elementoimg.src = "4.png";
        alterar.innerText = "Ela é real!!!";
        elementocng.value = "quartaMudanca"
    }else{
        elementoimg.src = "1.png";  
        alterar.innerText = "Resolução 720p"; 
        elementocng.value = "primeiraMudanca";
    }
})
