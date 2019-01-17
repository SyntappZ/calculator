$(document).ready(()=>{
  
    //arrays
    let plusArray = [];
    let subtractArray = [];
    let divideArray = [];
    let multiArray =[];
  
    //button press animations

    $('.btn').click(function(){
        $(this).addClass('pad');
        setTimeout(()=>{
        $(this).removeClass('pad');
        },100);
    });

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
        
     
     
    
     
       if(!action){

            if(numOnDisplay === '0' ||
                numOnDisplay === '+' ||
                numOnDisplay === '-' ||
                numOnDisplay === '÷' ||
                numOnDisplay === '×' ||
                numOnDisplay === 'NaN'){
                display.innerHTML = num;
            }else{
                display.textContent = numOnDisplay + num;
            }
       
       
       }else{
        //--------------operator keys--------------------
            if(action != 'equals'){
               
                $(this).addClass('color')
                
            }
        
            
        
        //plus key
        if(action === 'plus'){
            removeAllArr()
            let plusNum = numOnDisplay;
            plusArray.push(plusNum);
            display.innerHTML = '+';
        }
        
        //subtract key
        if(action === 'subtract'){
            removeAllArr()
            let subtractNum = numOnDisplay;
            subtractArray.push(subtractNum);
            display.innerHTML = '-';
        }
        
        //divide key
        if(action === 'divide'){
            removeAllArr()
            let divideNum = numOnDisplay;
            divideArray.push(divideNum);
            display.innerHTML = '÷';
        }
        
        //multiply key
        if(action === 'multi'){
            removeAllArr()
            let multiNum = numOnDisplay;
            multiArray.push(multiNum);
            display.innerHTML = '×';
        }

        //equals key
            if(action === 'equals'){
                // if(display.textContent === '+'){
                //     display.textContent = 'ERROR';
                // }
                let equalsNum = parseInt(numOnDisplay, 10);
                if(subtractArray.length === 1){
                    actionSubtract(parseInt(subtractArray[0], 10), equalsNum);
                    subtractArray.pop();
                }
                else if(plusArray.length === 1){
                    actionPlus(parseInt(plusArray[0], 10), equalsNum);
                    plusArray.pop();
                }
                else if(divideArray.length === 1){
                    actionDivide(parseInt(divideArray[0], 10), equalsNum);
                    divideArray.pop();
                }
                else{
                    actionMulti(parseInt(multiArray[0], 10), equalsNum);
                    multiArray.pop();
                }
                
            }
        }//operator
     
    })//btn click
   
   //clear button
   $('.c-btn').click(()=>{
        display.textContent = 0;
        removeAllArr();
   })
   
  function removeAllArr(){
        subtractArray.pop();
        plusArray.pop();
        multiArray.pop();
        divideArray.pop();
    }
     
      
     
     
   
   
   
   
   
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

    //divide function
    function actionDivide(firstSub, secondSub){
        const display = document.getElementById('display');
        let result = firstSub / secondSub;
        display.innerHTML = result;
    }

    //multiply function
    function actionMulti(firstSub, secondSub){
        const display = document.getElementById('display');
        let result = firstSub * secondSub;
        display.innerHTML = result;
    }
    
    
});