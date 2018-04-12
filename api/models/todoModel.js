var mongoose = require("mongoose");
var schema123 = mongoose.Schema;

var todoSchema = new schema123({
    text: String,
    isDone: Boolean
});
module.exports = mongoose.model("TodoItem", todoSchema);

