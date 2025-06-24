const Contact = require('../models/contactModel');

exports.createContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();
        
        res.status(201).json({ success: true, message: "Message successfully sent!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send message. Please try again." });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const { filter } = req.query;
        let dateFilter = {};

        if (filter) {
            const days = parseInt(filter);
            const date = new Date();
            date.setDate(date.getDate() - days);
            dateFilter = { createdAt: { $gte: date } };
        }

        const contacts = await Contact.find(dateFilter).sort({ createdAt: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch contacts." });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Contact deleted successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to delete contact." });
    }
};
