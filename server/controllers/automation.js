const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

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

const writeTitleForDescription = async (req, res) => {
    try {
        const { description } = req.body;
        if(description.length > 0) {
            const prompt = `Summarize the following task description in a 3 to 8 word title: ${description}`
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: prompt,
                temperature: 0.7,
                max_tokens: 345,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
              });
            const title = response.data.choices[0].text
            res.status(200).json({ title, message: "Title written successfully" });
        } else {
            res.status(500).json({ message: "Please provide a description" });
        } 
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error writing title", error: err });
    }
}

module.exports = {
    shortenUrl,
    sendSMS,
    writeTitleForDescription
}