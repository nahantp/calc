let display=document.getElementById("input")

const displayData=(data)=>{
    
    display.value+=data
}
const removeLatItem=()=>{
    display.value=display.value.slice(0,-1)
}
const clearAll=()=>{
    display.value=" "
}
const Result=()=>{
   try{
    console.log("inside try");
    
     display.value=eval(display.value)
   }
   catch{
    console.log("inside catch");
    
     display.value=eval(display.value)
   }
   finally{
    console.log("action completed");
    
   }
}