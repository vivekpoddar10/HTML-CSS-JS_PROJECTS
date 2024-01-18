'use strict';

//selecting all the input element
const inputs = document.querySelectorAll('input');

const handleChange = function(input){
    //adding event listener to change in input value
    input.addEventListener('change', function(){
        const suffix = this.dataset.sizing || '';
        //changing the style variable value
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    });
}

inputs.forEach(input => handleChange(input));