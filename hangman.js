
var words = new Array("nisha","anish");
const inputword=document.querySelector("#inputword")
var running=0;
    document.querySelector("#go").onclick= ()=>{
      resultText.value ="";


        if(!running){
          
            running=1;
            
            var word = words[Math.floor(Math.random() * words.length)];
            word =word.toUpperCase();
            let displayItem = word.replace(/./g, '<span class="dashes">_ </span>');
          inputword.innerHTML=displayItem;


 const keys = document.getElementById("keys")
const inputwords=document.getElementById("inputword")
const resultText=document.getElementById("resultText")
const wincount = document.getElementById("scoreA");
const fail = document.getElementById("Fail");

wincount.value="0";
fail.value="0"

for(let i= 65; i< 91; i++)
{
    
    //For creating the keys
    let button = document.createElement("button")
    button.classList.add("letters");
    keys.appendChild(button)
    button.innerText = String.fromCharCode(i);
    const letter = document.querySelector(".letters")
   
    
 

    button.addEventListener("focus",()=>{

      resultText.value += String.fromCharCode(i);

        if(!running){
            alert("First click Go button ")
        }
        else{
            let charArray = word.split("");
            let dashes = document.getElementsByClassName("dashes");

            if(charArray.includes(button.innerText)){
                charArray.forEach((char ,index)=>{
                    if(char === button.innerText){
                        dashes[index].innerText = char;
                      
                        wincount.value++;

                        
                        if (wincount.value >= charArray.length) {
                          resultText.value = 'You win';
                        
                        }
                      
                       

                    }
                }
                )
            }
            else{
              fail.value++;
              if(fail.value > 6){
                resultText.value = 'You loss';


              }

            }

        }
        
        
        
    })    

}
//character button keys
            
        } else alert("The word is already in play")
    }




