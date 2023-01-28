const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    category: { type: String, required: true },
    type:{type: String, required: true },
    difficulty: { type: String, required: true, enum: ["easy", "medium", "hard"] },
    question: { type: String, required: true },
    correct_answer: { type: String, required: true },
    incorrect_answers: [{ type: String }],

   
   
    

});
const Quiz = new mongoose.model("quiz", QuizSchema);
module.exports = Quiz;