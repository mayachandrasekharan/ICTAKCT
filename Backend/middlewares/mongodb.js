const mongoose = require('mongoose');
//connection to MongoDB using mongoose
const dbUrl = "mongodb+srv://Maya1994:Maya1994@cluster0.je1xiwd.mongodb.net/ictproject?retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Project Database connected");
    })
    .catch(() => {
        console.log("error");
    })