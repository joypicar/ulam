/** Script for Ulam */

//UI
const   submitBtn =  document.querySelector('#submit-btn'),
        content = document.querySelector('.content'),
        foodResult = document.querySelector('#food'),
        game = document.querySelector('#game'),
        preloader = document.querySelector('#loader'),
        finishBtn = document.querySelector('.finish-btn'),
        resultDiv = document.querySelector('#result'),
        extraResult = document.querySelector('#extra-result');

//Game Values
let cheapFood = ['Pabebe', 'Third Floor'],
    fastFood = ['Mcdo', 'Jollibee', 'Pabebe', 'Chowking', 'Mang Inasal', 'Burger King'],
    lunchOutFood = ['Dusit', 'Shangrila', 'Sofitel', 'Manila Peninsula'],
    extraCheapMsg = ['Sawa na kase tayo sa mahal', 'Nagtitipid tayo para may pang-travel',
        'Hahahaha'];  

//Hide First
preloader.style.display = 'none';
resultDiv.style.display = 'none';

//Listen Submit
submitBtn.addEventListener('click', function(){ 

    x = document.querySelector('#selectFood').value;
    selectedFood = x;
    
    if(selectedFood === 'cheap'){      
        b = cheapFood; 
        c = extraCheapMsg;
    }else if(selectedFood === 'fastF'){
        b = fastFood; 
        c = extraCheapMsg;
    }else if(selectedFood === 'lunch'){
        b = lunchOutFood;
        c = extraCheapMsg;
    }else{
        b = cheapFood.concat(fastFood).concat(lunchOutFood);
        c = extraCheapMsg;
    }
    let winningFood = b[Math.floor(b.length * Math.random())];
    let extraMsg = c[Math.floor(c.length * Math.random())];
    console.log(extraMsg);

    //Hide Again
    resultDiv.style.display = 'none';

    //Show Preloader
    preloader.style.display = 'block';
    setTimeout(function(){
        preloader.style.display = 'none';
        resultDiv.style.display = 'block';
        foodResult.textContent = winningFood;
        extraResult.textContent = extraMsg;
    }, 1000);

    //Add Finish
    //submitBtn.value = 'Repeat';
    //submitBtn.className += 'finish-btn'; 
    
});

//Listen Finish
game.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('finish-btn')){
        console.log('finish')
        document.location.reload();
    }
});


