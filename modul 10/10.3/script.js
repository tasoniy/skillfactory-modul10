/* 1. Реализовать чат на основе эхо-сервера wss://echo-ws-service.herokuapp.com.
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».
При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.
Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат.

2.Добавить в чат механизм отправки гео-локации.
*/

const echoServ = 'wss://echo-ws-service.herokuapp.com';

const btnSend = document.querySelector('#start');
const btnLocation = document.querySelector('#location');
const btnClose = document.querySelector('#end');
const messages = document.querySelector('.messages');

let webSocket = new WebSocket(echoServ);

function showMessage (message) {
    let someMessage = document.createElement('p');
    someMessage.innerHTML = message;
    messages.appendChild(someMessage);
}

window.onload = function openWebSocket () {
    webSocket.onopen = () => showMessage('You can start chatting...');
}

btnSend.addEventListener ('click', startChatting);

function startChatting () {
    const inputMessage = document.querySelector('input').value;
    showMessage(`You sent: ${inputMessage}`);
    webSocket.send(inputMessage);
    webSocket.onmessage = (e) => showMessage(`You got: ${e.data}`);
    webSocket.onclose = () => showMessage(`Your chatting is end. Bye!`);
}

btnLocation.addEventListener('click', checkNav)

function checkNav () {
   if (!navigator.geolocation) {
    alert('impossible to get your position');
   }
   else {
    navigator.geolocation.getCurrentPosition(success, error);
   }
}

const error = () => alert('impossible to get your position');
const success = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    showMessage (`<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">My location</a>`)
}

btnClose.addEventListener('click', closeWebSocket);

function closeWebSocket () {
    webSocket.close();  
}
