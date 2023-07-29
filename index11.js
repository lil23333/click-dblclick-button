let btn = document.querySelector('#btn');

btn.addEventListener('click', func);
btn.addEventListener('dblclick', func);

function func(event) {
	if (event.type === 'click') {
        btn.style.backgroundColor =  '#8B0000';
    }
    if (event.type === 'dblclick') {
        btn.style.backgroundColor = '#7FFFD4';
    }
}