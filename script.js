const letra = [
  "Quítate la ropa lento",
  "Toma tu tiempo",
  "Que yo me quiero disfrutar todo el momento",
  "Pon música suave",
  "Mueve tu cuerpo",
  "Y pon en práctica todos tus movimientos",
  "Eso sí hazme tuyo y báilame pegadito",
  "Hazme lo que tú quieras que yo soy tuyo, todito",
  "No te hagas la difícil, dale ma', dame un cantito",
  "Contigo me conformo aunque sea solo un ratito",
  "¿Pa' qué me calientas?",
  "¿Pa' qué tú me tientas?",
  "Báilame así (nana nana)",
  "Sedúceme así (baby girl)",
  "¿Pa' qué me calientas?",
  "¿Pa' qué tú me tientas?",
  "Báilame así (nana nana)",
  "Sedúceme así (yeah yeah yeah)"
];

let index = 0;

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (msg === "") return;

  const chatBox = document.getElementById("chatBox");

  // Mensaje del usuario
  const userMsg = document.createElement("div");
  userMsg.className = "message user-message";
  userMsg.textContent = msg;
  chatBox.appendChild(userMsg);

  input.value = "";

  // Respuesta automática con parte de la canción
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot-message";

    if (index < letra.length) {
      botMsg.textContent = letra[index];
      index++;
    } else {
      botMsg.textContent = "Un gusto conversar amor mio";
    }

    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

// Permitir enviar con Enter
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
