'use script';

const inputs = document.querySelectorAll('input');
console.log(inputs);

//adding event listener to each input on change in value
const handleChange = function(input) {
    input.addEventListener('change', function(){
        // dataset is an object which store all the attribute define by user using 'data-'
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    })
}


inputs.forEach(input => handleChange(input));