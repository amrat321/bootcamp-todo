import express, { Request, Response } from 'express';
import Schema from './../model/schema'
const router: express.Router = express.Router();


// get all todos
router.get('/allTodos', async (req: Request, res: Response) => {
    const todos = await Schema.find({})
    res.send(todos)
});


router.get('/todo:id', async (req: Request, res: Response) => {
    const todos = await Schema.findOne({})
    res.send(todos)
});

// add todo value
router.post('/addTodo', async (req: Request, res: Response) => {
    const value = await new Schema({
        tittle: req.body.tittle,
        descraption: req.body.descraption
    })
    // save in database
    value.save().then(() => {
        res.send({
            message: "Send Sucesfully!"
        })
    })
        .catch((err: string) => {
            console.log(err)
        })

})
// update
router.put('/updateTodo:id', async (req: Request, res: Response) => {
    try {
        await Schema.findOneAndUpdate({ _id: req.body.id }, { tittle: req.body.tittle, descraption: req.body.descraption })
        res.send({
            message: 'Update Success'
        })
    } catch (er) {
        res.send({
            message: er.message
        })
    }
})

// delete
router.delete('/deleteTodo:id', async (req: Request, res: Response) => {
    try {
        await Schema.findByIdAndDelete({ _id: req.body.id })
        res.send({
            message: 'Delete Success'
        })
    }
    catch (er) {
        res.send({
            message: er.message
        })
    }

})




module.exports = router


