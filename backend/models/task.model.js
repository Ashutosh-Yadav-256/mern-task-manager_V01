const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true, enum: ['To-Do', 'In Progress', 'Done'], default: 'To-Do' },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    dueDate: { type: Date },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
