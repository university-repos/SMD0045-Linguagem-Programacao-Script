let button = document.querySelector('.add-btn');
button.addEventListener('click', () => {
    let counter = document.querySelector('.input-field');
    console.log(counter);
    console.log(counter.value);
    counter.value = parseInt(counter.value) + parseInt(2);
}, false);