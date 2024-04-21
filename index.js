import express from "express";
import config from './db/config.js';
import Email from './db/emails.js'
import cors from 'cors'
const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json({extended : true}));
app.use(cors());

app.post('/save', async (req, resp, next) => {
    try{
       
        console.log(req.body);
        let user = new Email(req.body);
        let result = await user.save(); // details are saved in database
        return resp.status(200).json("Email saved Succssfully");
    }
    catch(error){
        resp.send("not connected");
        // resp.status(500).json(error.message);
    }
})

app.post('/emails/:type' , async (req , resp ) => {
    console.log(req.params.type);
    try{
        let emails;
        if(req.params.type==='bin'){
            emails = await Email.find({bin:true});
        }
        else if(req.params.type==='inbox'){
            emails = await Email.find({to : 'yashkhetan44@gmail.com'});
        }
        else if(req.params.type==='allmail'){
            emails = await Email.find({});
        }
        else if(req.params.type==='starred'){
            emails = await Email.find({starred: true , bin: false})
        }
        else{
            emails = await Email.find({type: req.params.type})
        }
        // resp.send(emails);
        return resp.status(200).json(emails);
    }catch(error){
        console.log('not responding')
        resp.send("not connected");
    }
})

app.post('/save-draft' , async (req , resp) => {
    try{
        console.log(req.body);
        let user = new Email(req.body);
        let result = await user.save(); // details are saved in database
        return resp.status(200).json("Email saved Succssfully");
    }
    catch(error){
        resp.send("not connected");
        // resp.status(500).json(error.message);
    }
})

app.post('/bin' , async (req , resp) => {
    try{
        await Email.updateMany({_id:{$in:req.body}} , {$set:{bin:true , starred:false , type: ''}});
        return resp.status(200).json("Emails moves to Bin successfully"); 
    }catch(error){
        // resp.send("not connected");
        resp.status(500).json(error.message);
    }
})

app.post('/starred' , async (req , resp) => {
    try{
        await Email.updateOne({_id:{$in:req.body.id}} , {$set:{starred:req.body.value}});
        return resp.status(200).json("Email is starred mark");
    }catch(error){
        // resp.send("not connected");
        resp.status(500).json(error.message);
    }
})

app.delete('/delete' , async (req , resp) => {
    try{
        await Email.deleteMany({_id : {$in : req.body}});
        return resp.status(200).json("Emails deleted Successfully")
    }catch(error){
        // resp.send("not connected");
        resp.status(500).json(error.message);
    }
})

const Port = 8000;

app.listen(Port , ()=> console.log(`Server is started on ${Port}`));

