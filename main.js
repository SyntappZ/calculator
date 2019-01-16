$(document).ready(()=>{
  
    let plusArray = [];
    let subtractArray = [];
  
     $('.c-btn').click(function(){
     $(this).addClass('pad');
     setTimeout(()=>{
       $(this).removeClass('pad');
     },100);
   });
   
   
   $('.btn').click(function(e){
     const key = e.target;
     const action = key.dataset.action;
     const display = document.getElementById('display');
     const num = key.textContent;  
     const numOnDisplay = display.textContent;
     
     
     //number array
    
     
     if(!action){
       //number keys
        $('.btn').click(function(){
     $(this).addClass('pad');
     setTimeout(()=>{
       $(this).removeClass('pad');
     },100);
   });
       if(numOnDisplay === '0' ||
         numOnDisplay === '+' ||
         numOnDisplay === '-' ||
         numOnDisplay === 'NaN'){
         display.innerHTML = num;
       }else{
         display.textContent = numOnDisplay + num;
       }
       
       
     }else{
       //operator keys
          if(action !== 'equals'){
            $(this).addClass('pad');
          }
       
         
      
       //plus key
       if(action === 'plus'){
        let plusNum = numOnDisplay;
         plusArray.push(plusNum);
         display.innerHTML = '+';
       }
       
       //subtract key
       if(action === 'subtract'){
          let subtractNum = numOnDisplay;
         subtractArray.push(subtractNum);
         display.innerHTML = '-';
       }
       
       //equals key
       if(action === 'equals'){
        let equalsNum = parseInt(numOnDisplay, 10);
         if(plusArray === undefined || plusArray.length === 0){
           actionSubtract(parseInt(subtractArray[0], 10), equalsNum);
           subtractArray.pop();
         }else{
            actionPlus(parseInt(plusArray[0], 10), equalsNum);
           plusArray.pop();
         }
       
        
       }
     }
     
   })
   
   
   $('.c-btn').click(()=>{
     //clear
     display.textContent = 0;
    
   })
   
  
     
      
     
     
   
   
   
   
   
   //plus function
  function actionPlus(firstNum, secondNum){
     const display = document.getElementById('display');
     let result = firstNum + secondNum;
       display.innerHTML = result;
    
  }
   
   //subtract function
   function actionSubtract(firstSub, secondSub){
     const display = document.getElementById('display');
     let result = firstSub - secondSub;
        display.innerHTML = result;
    
  }
   
   
   
 })