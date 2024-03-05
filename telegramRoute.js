const express = require('express');
const axios = require('axios');

const router = express.Router();

const { TELEGRAM_API_KEY } = require('./constant');

router.post('webhook', async (req, res) => {
    const message = req.body.message;
    if (message && message.text) {
        const chatId = message.chat.id;
        const text = message.text;
        console.log(`Received message: ${text}`);
        sendMessage(chatId, 'Received your message');
    }
    res.sendStatus(200);
});

router.get('/setWebhook', async (req, res) => {
    try {
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const url = `${baseUrl}/telegram/webhook`;
        console.log(url);
        let options = {
            method: 'POST',
            url: `https://api.telegram.org/bot${TELEGRAM_API_KEY}`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                url: url
            }
        };
        // const response = await axios.request(options);
        // res.send(response.data);
        res.send('OK');
    } catch (error) {
        console.error(error);
        res.send(error);
    }
});

module.exports = {
    router
};
