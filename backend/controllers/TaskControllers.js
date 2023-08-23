const TaskModel=require("../models/TaskModel")

 module.exports.getTasks = async(req,res)=>{
    const tasks = await TaskModel.find();
    res.send(tasks);     
 }
    
 module.exports.saveTasks = (req,res)=>{ 
    const {id,Name,Age,Email,Password,Phone,Address,access}=req.body

    TaskModel.create({id,Name,Age,Password,Email,Phone,Address,access})
    .then((data) => {
        console.log("Saved successfully");
        res.status(200)
        res.send(data);  
    }).catch((err) => {
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    });

 }
 

 
module.exports.updateTask = async (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  console.log(updates)
  try {
      const updatedUser = await TaskModel.findByIdAndUpdate(userId, updates, { new: true });
      if (!updatedUser) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(updatedUser);
  } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
  }
};

  
  

 module.exports.deleteTask = async(req,res)=>{
    const _id = req.params.id;
    // console.log(_id);
    
    TaskModel.findByIdAndDelete(_id)
    .then(() => {
        res.send("Deleted Successfully")
        console.log("deleted")
    })
    .catch((err) => {
        console.log(err);
        res.send({error:err,msg:"Something went wrong!"});
    });
 }


 module.exports.verifyTask = async (req, res) => {
    try {
      const { Email,Password } = req.body;
  
      // Check if user exists by Email
      const task = await TaskModel.findOne({Email,Password});
      if (task) {
        res.json({ isValid: true, message: "Email is valid" });
      } else {
        res.json({ isValid: false, message: "Email is not valid"  });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  };

  
  
  
  
  
  


//  module.exports.updateTask = (req,res)=>{
//      const {id} =req.params;
//      const  {Name}=req.body;  

    //  TaskModel.findByIdAndUpdate(id,{Name})
    //    .then(() => 
    //        res.send("Updated successfully"))
    //    .catch((err) => {
    //        console.log(err);
    //        res.send({error:err,msg:"Something went wrong!"});
    //    });



    /////////////////////
  //   try {
  //     const updatedTask = TaskModel.findByIdAndUpdate(
  //       id,
  //       { Name },
  //       { new: true } // This option returns the updated document
  //     );
      
  //     if (!updatedTask) {
  //       return res.status(404).send({ msg: "Task not found" });
  //     }
  
  //     res.send({ msg: "Updated successfully", task: updatedTask });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).send({ error: err, msg: "Something went wrong!" });
  //   }
  // };