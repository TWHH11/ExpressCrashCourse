const errorHandler = (err,req,res,next) =>{
    res.status(404).json({msg:'Error'})
}

export default errorHandler; 