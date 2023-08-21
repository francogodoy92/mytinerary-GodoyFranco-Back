import mongoose from "mongoose";

let uri_link = process.env.MONGO;

mongoose.connect(uri_link)
.then(()=>
    {console.log("DB Connected");
})
.catch( error =>{console.log(error + "DB connection failed");
})