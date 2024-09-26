const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://rajajudiya096:rajrajraj0080@cluster0.qxqcu.mongodb.net/admin-pannel")
  .then(() => console.log('DB is Connected.....!'))
  .catch((err) =>{
    console.log("connected is failed...!", err)
  });


