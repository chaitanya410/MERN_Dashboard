const { Router } = require("express");

const {
  getTasks,
  saveTasks,
  updateTask, 
  deleteTask,
  verifyTask,
} = require("../controllers/TaskControllers");

const router = Router();

router.get("/get", getTasks);
router.post("/save",saveTasks);
router.put("/update/:id",updateTask);
router.post("/delete/:id",deleteTask);
router.post("/verifyTask",verifyTask);

module.exports = router;
