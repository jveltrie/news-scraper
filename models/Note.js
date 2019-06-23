var mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  body: {
		type: String,
	},
	article: {
		type: Schema.Types.ObjectId,
		ref: "Article"
	}
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;