// console.log('I am in a separate file')
function updateCase(isIncrigin){
    const mobileInputFild=document.getElementById('mobile-input');
    // console.log(mobileInputFild);
   let inputFildText=mobileInputFild.value ;
   if(isIncrigin){
         inputFildText=parseInt (inputFildText) + 1 ;
   }
   else if(inputFildText > 0){
        inputFildText=parseInt(inputFildText) - 1;

   }
   mobileInputFild.value=inputFildText;

   const mobilePrice=document.getElementById('mobile-price');
   mobilePrice.innerText = inputFildText * 1219;

}



document.getElementById('incrice-btn').addEventListener('click',function(){
//     // console.log('clicked');
//     const mobileInputFild=document.getElementById('mobile-input');
//     // console.log(mobileInputFild);
//    const inputFildText=mobileInputFild.value ;
//    mobileInputFild.value=parseInt (inputFildText) + 1 ;
     updateCase(true);

})

// discriment btn 
document.getElementById('discriment-btn').addEventListener('click',function(){
     updateCase(false);
    
})