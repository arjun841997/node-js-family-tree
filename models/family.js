var mongoose = require("mongoose");

const schema = new mongoose.Schema({ 
    familyName: String,
    totalMembers: { type: Number },
    children: Array,
    gender: String,
    name: String
});

const Family = mongoose.model("Family", schema, 'Family');

module.exports = Family