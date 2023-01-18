import axios from 'axios'

const Automation = {
    async sendText(name, phone, message) {
        await axios.post(`http://localhost:4000/automation/sms`, {
            name,
            phone,
            message,
            sender: "Automation"
        })
    },
    async shortenUrl(url) {
        const res = await axios.post(`http://localhost:4000/automation/shorten-url`, {
            url
        })
        return res.data.url;
    }
}

export default Automation;