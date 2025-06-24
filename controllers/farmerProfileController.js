const Farmer = require('../models/farmerModel'); // Adjust the path if needed

// Update Farmer's Full Name and Phone Number
exports.updateFarmerProfile = async (req, res) => {
    const { username, name, phone } = req.body;

    try {
        // Find the farmer by their username and update their name and phone number
        const farmer = await Farmer.findOneAndUpdate(
            { username: username },
            { name: name, phone: phone },
            { new: true } // Return the updated document
        );

        if (!farmer) {
            return res.status(404).json({ success: false, message: 'Farmer not found' });
        }

        res.json({ success: true, message: 'Profile updated successfully!', farmer });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating profile', error });
    }
};
