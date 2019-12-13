import mongoose from 'mongoose'
export interface Todo extends mongoose.Document {
    tittle: string
    descraption: string,
    done: boolean
}
export const model = new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    descraption: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('user', model)

export default User