// Generate button
let generate_value = document.getElementById('generate_value');
let generate_btn = document.getElementById('generate_btn');
generate_btn.addEventListener('click', function () {
    generate_value.value = parseInt(Math.random() * (9999 - 1000 + 1) + 1000)
});
// Get input value
let input_value = document.getElementById('input_value');
let number = document.getElementsByClassName('button');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            document.getElementById('input_value').value = '';
        } else if (this.id == 'backspace') {
            const newNumber = input_value.value.substr(0, input_value.value.length - 1);
            document.getElementById('input_value').value = newNumber;
        }
        else {
            const previousNumber = input_value.value;
            const newNumber = previousNumber + this.id;
            input_value.value = newNumber;
        }

    });
};

// submit button
let submit = document.getElementById('submit');
let right = document.getElementById('right');
let wrong = document.getElementById('wrong');
submit.addEventListener('click', function () {
    if (generate_value.value == input_value.value) {
        right.style.display = 'block';
        wrong.style.display = 'none';
    }else {
        right.style.display = 'none';
        wrong.style.display = 'block';
    }
});
