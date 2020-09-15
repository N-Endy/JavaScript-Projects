(function() {
    let counterDisplay = document.querySelector('.counter-display');
    let subtract = document.querySelector('.lower');
    let add = document.querySelector('.add');

    
    subtract.addEventListener('click', () => {
        counterDisplay.textContent > 0 ? counterDisplay.style.color = 'green' :
        counterDisplay.textContent < 0 ? counterDisplay.style.color = 'red' : counterDisplay.style.color = '#000';
        counterDisplay.textContent--;
    });
    add.addEventListener('click', () => {
        counterDisplay.textContent < 0 ? counterDisplay.style.color = 'red' :
        counterDisplay.textContent > 0 ? counterDisplay.style.color = 'green' : counterDisplay.style.color = '#000';
        counterDisplay.textContent++;
    });
    
})();


  