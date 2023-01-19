class Template {
    constructor(id, name, messageType, message, ) {
        this.id = id;
        this.name = name;
        this.message = message;
        this.messageType = messageType;
    }
}

const MessageTemplates = {
    templates: [
        new Template(
            1,
            "15 Minute Followup",
            "text",
            "Hi {firstName},\n\nI just wanted to follow up with you about your recent visit to {businessName}. I hope you enjoyed your experience and I look forward to seeing you again soon.\n\nThanks,\n{repFirstName} {repLastName}\n{businessName}"
        ),
        new Template(
            2,
            "15 Minute Followup",
            "email",
            "Hi {firstName},\n\nI just wanted to follow up with you about your recent visit to {businessName}. I hope you enjoyed your experience and I look forward to seeing you again soon.\n\nThanks,\n{repFirstName} {repLastName}\n{businessName}"
        ),
        new Template(
            3,
            "15 Minute Contract Followup",
            "text",
            `Hi {firstName}. This is {repFirstName} from {businessName}. Just wanted to let you know that your account is setup and scheduled! I also sent over that e-sign. Please let me know if you have any questions about the proposal or need any changes before your service! Have a great rest of your day!`
        ),
    ],
    getTemplateByName: function (id) {
        return this.templates.find(template => template.id === id);
    },
    getTemplateSendType: function (id) {
        return this.getTemplateByName(id).messageType;
    },
    fillTemplate: function (templateId, preFillData) {
        let filledTemplate = this.getTemplateByName(templateId).message;
        for (const key in preFillData) {
            filledTemplate = filledTemplate.replace(new RegExp(`{${key}}`, "g"), preFillData[key]);
        }
        return filledTemplate;
    }
}

export default MessageTemplates;