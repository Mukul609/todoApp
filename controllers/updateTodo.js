// import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async(req,res) => {
    try {
        // extract title and description from request body
        const {id} = req.params;
        const {title, description} = req.body;
        //create a new Todo object and insert into db.
        const response = await Todo.findByIdAndUpdate(
            {_id : id},
            {title,description, updatedAt: Date.now()},
        )
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'updated Successfully'
            }
        );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}
