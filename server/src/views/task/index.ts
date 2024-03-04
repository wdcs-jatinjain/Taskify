import addTask from "./addtask";
import deleteTask from "./deletetask";
import editTask from "./edittask";
import getAllTask from "./gettask";
import getOneTask from "./getone";
import addCatagories from "./addcatagories";
import getAllCatagories from "./getallcatagories";


const taskViews = ({
    addTaskViews: addTask,
    editTaskViews: editTask,
    deleteTaskViews: deleteTask,
    getAllTaskViews: getAllTask,
    getOneTaskViews: getOneTask,
    addCatagoriesViews: addCatagories,
    getAllCatagoriesViews: getAllCatagories,
})

export default taskViews;