let count = 0;

const  countValue = document.getElementById("count");
const  increaseBtn = document.getElementById("increase");
const  resetBtn = document.getElementById("reset");
const  decreaseBtn = document.getElementById("decrease");
const  decreaseBtn10 = document.getElementById("dec10");
const  increaseBtn10 = document.getElementById("inc10");

increaseBtn.addEventListener("click", () => {
    count ++ ;
    countValue.textContent = count ;
    
});

increaseBtn10.addEventListener("click", () => {
    count += 10 ;
    countValue.textContent = count ;
    
});

decreaseBtn.addEventListener("click", () => {
    count-- ;
    countValue.textContent = count ;
    
});

decreaseBtn10.addEventListener("click", () => {
    count -= 10 ;
    countValue.textContent = count ;
    
});

resetBtn.addEventListener("click", () => {
    count = 0 ;
    countValue.textContent = count ;
    
});

