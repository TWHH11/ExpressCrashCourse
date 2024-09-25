
const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.protocol}:// ${req.ger('host')} ${req.originalUrl}`);
    next();
}

export default logger;