document.getElementById('sendButton').addEventListener('click', sendMessage);
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('userInput');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        addMessageToChatbox(messageText, 'user-message');
        messageInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const botResponse = generateBotResponse(messageText);
            addMessageToChatbox(botResponse, 'bot-message');
        }, 500);
    }
}

function addMessageToChatbox(message, className) {
    const chatboxMessages = document.querySelector('.chatbox-messages');
    
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.innerText = message;
    
    chatboxMessages.appendChild(messageElement);
    chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
}

function generateBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    const responses = {
        greetings: [
            'Hello! I am CseanBot. What do you need?',
            'Sup! I’m CseanBot. How can I help you?',
            'Hey! The name’s CseanBot. What can I do for you?'
        ],
        farewells: [
            'Goodbye! Have a great day!',
            'See ya later!',
            'Bye! Have a great day, my friend!'
        ],
        howAreYou: [
            'I’m doing great, thanks for asking!',
            'Ummm... I’m just a bot, but I’m functioning well!',
            'I’m doing well! How about you?'
        ],
        help: [
            'I can’t guarantee I’ll be useful, but I’ll try my best!',
            'I’m only a bot and know a few things, so my help is limited.'
        ],
        default: [
            'Tip: If you see this message, try asking "Hello", "Hi", "Bye", "Goodbye", "Assist", "Help", "Support", "How are you?", or "How are you doing?"',
            'Can you please rephrase your question?',
            'I’m still learning. Could you ask something else?'
        ]
    };
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
        return getRandomResponse(responses.greetings);
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye') || lowerCaseMessage.includes('see you')) {
        return getRandomResponse(responses.farewells);
    } else if (lowerCaseMessage.includes('how are you') || lowerCaseMessage.includes('how are you doing')) {
        return getRandomResponse(responses.howAreYou);
    } else if (lowerCaseMessage.includes('help') || lowerCaseMessage.includes('assist') || lowerCaseMessage.includes('support')) {
        return getRandomResponse(responses.help);
    } else {
        return getRandomResponse(responses.default);
    }
}

function getRandomResponse(responseArray) {
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
}
