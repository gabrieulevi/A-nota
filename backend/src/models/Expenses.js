import mongoose from "mongoose";

const ExpensesSchema = new mongoose.Schema(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        name: { type: String, required: [true, 'the expenses name is required'] },
        nationality: { type: String },
    },
    { versionKey: false }
);

const expenses = mongoose.model('expenses', ExpensesSchema);
export { expenses, ExpensesSchema };
