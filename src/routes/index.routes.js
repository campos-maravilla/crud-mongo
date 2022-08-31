import { Router } from 'express'
import { createTasks, deleteTask, renderTaskEdit, renderTasks, toggleTasksDone, updateTasks } from '../controllers/tasks.controller'


const router = Router()

router.get('/', renderTasks)

router.post('/tasks/add', createTasks)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', updateTasks)

router.get('/tasks/:id/delete', deleteTask)

router.get('/tasks/:id/toggleDone', toggleTasksDone)

export default router