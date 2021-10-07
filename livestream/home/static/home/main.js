//login
i = 0

async function a_back(){
    while(1){
        var para = document.createElement("div");
        para.classList.add("a-img");
        para.id = i;
        var element = document.getElementById("a-full");
        element.appendChild(para);
        //sätt tiden som en konstant och förändra bara hur långt den åker för att förändra farten och riktningen 
        document.getElementById(i).style.transition = "all linear 40s"
        document.getElementById(i).style.transform = "translate(" + Math.floor(Math.random() * 8.5)+5 + "vw, "+ Math.floor(Math.random() * 8.5)+5 +"vh)";
        await new Promise(r => setTimeout(r, 10));
        document.getElementById(i).style.transform = "translate("+rand()+"vw, "+rand()+"vh)"  
        await new Promise(r => setTimeout(r, 500));
        
        if (i > 30){
            elem = document.getElementById(i-15)
            elem.parentNode.removeChild(elem)
        }
        i += 1;
    }
}

function rand(){
    t= Math.floor(Math.random() * 2)
    if(t == 1){
        return (-1 * (Math.floor(Math.random() * 100) + 195))
    }
    else{
        return Math.floor(Math.random() * 100) + 195
    }
}




//mainpage
function toggle(element){
    elems = document.getElementsByClassName('msection');
    for(i = 0; i < elems.length; i++){
        elems[i].style.display = "none";
    }
    document.getElementById(element).style.display = "grid"
}

