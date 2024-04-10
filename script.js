const greetingElement = document.getElementById("greeting");
const changeGreetingButton = document.getElementById("changeGreeting");

const greetings = [
  "Hello DevOps",
  "Bonjour DevOps",
  "Hola DevOps",
  "こんにちは DevOps",
  "你好, DevOps",
  "Olá, DevOps",
  "안녕하세요, DevOps",
  "Ciao, DevOps",
  "Namaste, DevOps",
];

function changeGreeting() {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  greetingElement.textContent = greetings[randomIndex];
}

changeGreetingButton.addEventListener("click", changeGreeting);
