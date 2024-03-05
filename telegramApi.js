const axios = require('axios');

const sendMessage = async (chatId, text) => {
    axios.post(`${TELEGRAM_API}/sendMessage`, {
        chat_id: chatId,
        text: text,
    })
        .then(response => {
            console.log('Message posted');
        })
        .catch(error => {
            console.error(error);
        });
};