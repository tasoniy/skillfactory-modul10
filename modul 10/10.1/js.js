const button = document.getElementById('button');
const empty = document.getElementById ('empty');
const filled = document.getElementById('filled');

function classChange () {
    empty.classList.toggle('hidden');
    filled.classList.toggle('show');
}


button.addEventListener('click', classChange);