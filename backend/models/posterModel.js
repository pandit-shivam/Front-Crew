const {Schema,model} = require('../connection');

const myschema = new Schema({
    name:String,
    email:String,
    password:String,
    avatar: String,
    createdAt: String
});

module.exports=model('poster',myschema)