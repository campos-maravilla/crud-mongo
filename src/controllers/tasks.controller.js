import Task from '../models/Task'

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean()
    //console.log(task)
    //console.log('tareas')
    //console.log(tasks[0])
    res.render('index', { tasks: tasks })
}

export const createTasks = async (req, res) => {
    try {
        // console.log(req.body)
        //const { title, description, done } = req.body
        const task = Task(req.body)

        await task.save()
        console.log(task)
    } catch (error) {
        console.log(error)
    }
    res.redirect('/')
}

export const renderTaskEdit = async (req, res) => {
    try {
        //console.log(req.params.id)
        const task = await Task.findById(req.params.id).lean()

        res.render('edit', { task })
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTasks = async (req, res) => {
    //console.log(req.body)
    //console.log(req.params.id)
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}

export const deleteTask = async (req, res) => {
    const { id } = req.params

    await Task.findByIdAndDelete(id)

    res.redirect('/')
}

export const toggleTasksDone = async (req, res) => {
    const { id } = req.params
    //await Task.findByIdAndUpdate(id, { done: !req.body.done })


    const task = await Task.findById(id)
    //console.log(task)
    task.done = !task.done

    await task.save()

    res.redirect('/')
}