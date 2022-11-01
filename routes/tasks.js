const express=require('express')
const router=express.Router()
const {getAllTasks,createTask,getTask,updateTask,deleteTask}=require('./../controllers/task')
const uservalid=require('./../validator/user')


router.route('/').get(getAllTasks).post(uservalid.name,createTask)
router.route('/:id').put(updateTask).delete(deleteTask).get(getTask)


module.exports=router