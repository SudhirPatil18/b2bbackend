const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/adminCredentialsModel'); // ✅ Make sure this path is correct

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://sudhirrpatil2001:milkoza123@cluster0.zbhrpsg.mongodb.net/mil12?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected');
  encryptExistingPassword('Milkoza@2554'); // 🔁 Move inside to ensure connection first
}).catch(err => console.error('❌ MongoDB connection error:', err));

// Encrypt password function
async function encryptExistingPassword(username) {
  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      console.log('⚠️ Admin not found');
      return;
    }

    const isPasswordHashed = admin.password.startsWith('$2a$');
    if (isPasswordHashed) {
      console.log('✅ Password is already hashed');
      return;
    }

    const hashedPassword = await bcrypt.hash(admin.password, 10);
    admin.password = hashedPassword;
    await admin.save();

    console.log('✅ Password encrypted and saved successfully');
  } catch (error) {
    console.error('❌ Error encrypting password:', error);
  } finally {
    mongoose.connection.close(); // Always close after completion
  }
}
