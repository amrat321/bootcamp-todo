import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://amrat:amrat@cluster0-qwjig.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
export default mongoose