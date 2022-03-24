// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. 

let button = document.getElementById('button');


button.addEventListener('click', () => {
    let widthDisplay = window.screen.width;
    let heightDisplay = window.screen.height;
    alert(`Ширина вашего экрана: ${widthDisplay}, высота вашего экрана: ${heightDisplay}`) //так по тз

    //document.querySelector('.text').innerHTML = `Ширина вашего экрана: ${widthDisplay}, высота вашего экрана: ${heightDisplay}` так  поинтереснее)
});

