const {Schema,model} = require('../connection');

const myschema = new Schema({
    title:String,
    user:String,
    design:String,
    data: String,
    createdAt: String
});

module.exports=model('user',myschema)