// expression
const sayGreeting = () => {
  console.log('Selamat Datang!');
};

// declrative: hoisted
function initChatroom() {
  console.log('Init Chatroom...');
  sayGreeting();
}

initChatroom();
initChatroom;
