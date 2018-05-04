var toName = document.getElementById("to");
var message = document.getElementById("message");
var fromName = document.getElementById("from");
var toInp = document.getElementById("toInp");
var mesInp = document.getElementById("myMessage");
var fromInp = document.getElementById("fromInp");
var bgImg = document.getElementById("bgImg");
var display = document.getElementById("postcard");
var addTo = document.getElementById("add");
var gallery = document.getElementById("preview");


     toInp.addEventListener("keyup", function (ev){
        if(ev.keyCode == 13){
            toName.innerText = "To " + "";
        } else {
            toName.innerText = "To " + toInp.value;
        }
        
    });

  mesInp.addEventListener("keyup", function (ev){
        if(ev.keyCode == 13){
            message.innerText ="";
        } else {
              message.innerText = mesInp.value;
        }
        
    });

  fromInp.addEventListener("keyup", function (ev){
        if(ev.keyCode == 13){
            fromName.innerText = "From " + "";
        } else {
              fromName.innerText = "From " + fromInp.value;
        }
        
    });

bgImg.addEventListener("keyup", function (ev){
        if(ev.keyCode == 13){
            display.style.backgroundImage = "url("+bgImg.value+")";
    
            }
        
    });


function createThumbs(a, b){
    
    var newDiv = document.createElement("div");
    
    newDiv.className ="containers";
    
    newDiv.appendChild(toInp);
    newDiv.appendChild(bgImg);
    
    gallery.appendChild(newDiv);
    
    if(a == ""){
        newDiv.innerText = "";
    } else{
        newDiv.innerText = toInp.value;
    }
       if(b == ""){
        newDiv.innerHTML= "";
    } else{
        newDiv.innerHTML = bgImg.value;
    }

}
   
addTo.addEventListener("click", function(){
    createThumbs(toInp.value, bgImg.value);
});
    

    
