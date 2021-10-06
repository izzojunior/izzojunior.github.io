const elemento1 = document.querySelector("#muda1"); 
const elementoimg = document.querySelector("#img"); 
const alterar = document.querySelector("#alterar"); 

elemento1.addEventListener("click", ()=>{
    if(elemento1.value == "primeiraMudanca"){
       elementoimg.src = "2.png";  
       alterar.innerText = "Resolução 1080p"; 
       elemento1.value = "segundaMudanca";
    }else if (elemento1.value == "segundaMudanca"){
       elementoimg.src = "3.png";
       alterar.innerText = "Resolução 4k";
       elemento1.value = "terceiraMudanca";
    }else if (elemento1.value == "terceiraMudanca"){
        elementoimg.src = "4.png";
        alterar.innerText = "Ela é real!!!";
        elemento1.value = "quartaMudanca"
    }else{
        elementoimg.src = "1.png";  
        alterar.innerText = "Resolução 720p"; 
        elemento1.value = "primeiraMudanca";
    }
})
