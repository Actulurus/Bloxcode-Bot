const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    user:String,
    index:String
},{timestamps:true})

const ticketSchema = mongoose.model("Tickets", Schema)

module.exports = ticketSchema