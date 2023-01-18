const axios = require('axios');

const shortenUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const apiKey  = process.env.TINY_URL_KEY
        //call tiny url api
        const endpoint = `https://api.tinyurl.com/create`;
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            }
        }

        const response = await axios.post(endpoint, JSON.stringify({ url }), config);
        const shortenedUrl = response.data.data.tiny_url
        res.status(200).json({ url: shortenedUrl, message: "URL shortened successfully" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error shortening URL", error: err });
    }
}

const sendSMS = async (req, res) => {
    try {
        const { name, sender, message, phone } = req.body;
        const endpoint = process.env.SMS_HOOK;
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const response = await axios.post(endpoint, JSON.stringify({ name, sender, message, phone }), config);
        res.status(200).json({ message: "SMS sent successfully" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error sending SMS", error: err });
    }
}

module.exports = {
    shortenUrl,
    sendSMS
}