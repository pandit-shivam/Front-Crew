const {Schema,model} = require('../connection');

const myschema = new Schema({
    title:String,
    data:String,
    placeholders:Array,
    createdAt: String
});

module.exports=model('design',myschema)