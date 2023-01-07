const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true
    },
    user_code: [
        {
            code_title: {
                type: String,
            },
            code_content: {
                type: String,
            }
        }
    ]
});

const UserDataCollection=new mongoose.model("userData",userDataSchema);

module.exports=UserDataCollection;
