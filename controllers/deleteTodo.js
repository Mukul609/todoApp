// import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res) => {
    try {
        // extract title and description from request body
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                message:'deleted Successfully'
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
