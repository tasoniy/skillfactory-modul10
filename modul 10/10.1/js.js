/* Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
*/

const button = document.getElementById('button');
const empty = document.getElementById ('empty');
const filled = document.getElementById('filled');

function classChange () {
    empty.classList.toggle('hidden');
    filled.classList.toggle('show');
}


button.addEventListener('click', classChange);
