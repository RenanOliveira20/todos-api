const { Router } = require('express');

const router = Router();
const Todo = require('./Models/Todo');
router.post('/todo', async (request, response) => {
    try {
        const newTodo = await Todo.create(request.body)
        console.log.log(response.status(201).json(newTodo))
    } catch (error) {
        request.status(500).json({ msg: 'ServerError', error });
    }
})

router.get('/todo', async (request, response) => {
    try {
        const todos = await Todo.find();
        response.status(200).json(todos)
    } catch (error) {

        response.status(500).json({ msg: 'server error', error });
    }
})
router.get('/todo/:id', async (request, response) => {
    const { id } = request.params
    try {
        const todos = await Todo.findById(id);
        response.status(200).json(todos)
    } catch (error) {

        response.status(500).json({ msg: 'server error', error });
    }
})

router.put('/todo/:id', async (request, response) => {
    const { id } = request.params;
    const payload = request.body;
    try {
        const updateTodo = await Todo.findOneAndUpdate({ _id: id }, payload, { completed: true });
        response.status(200).json(updateTodo)
    } catch (error) {
        response.status(500).json({ msg: 'error while updating todo', error });
    }
})
router.delete('/todo/:id', async (request, response) => {
    const { id } = request.params;
    try {
        await Joke.findByIdAndDelete(id);
        response.status(204).json();
    } catch (error) {
        response.status(500).json({ msg: 'Error while deleting todo', error });
    }
})

module.exports = router;