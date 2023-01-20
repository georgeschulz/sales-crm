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
    },
    addToPestPac(fields) {
        let link =  "https://app.pestpac.com/location/add.asp?SubdivisionID=None&type=R"
        for (let key in fields) {
            if(!fields[key] || fields[key] === "None") {
                continue;
            } else {
                link += "&" + key + "=" + fields[key];
            }
        }

        //go to the link
        window.open(link, '_blank');
    },
    schedule(address, city, state, zip) {
        let link = `https://app.pestpac.com/appointment/quick/default.asp?Mode=CreateReservation&ApptType=&ZipCode=${encodeURIComponent(zip)}&City=${encodeURIComponent(city)}&MapCodeID=&MapCode=&Address=${encodeURIComponent(address)}&State=${encodeURIComponent(state)}`
        //open a new window with the link
        window.open(link, '_blank');
    }
}

export default Automation;