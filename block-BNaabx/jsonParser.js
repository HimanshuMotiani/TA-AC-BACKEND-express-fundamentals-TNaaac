function jsonParser(req,res,next){

    var store = '';
    req.on("data",(chunk)=>{
        store= store+ chunk
    })
    req.on("end",()=>{
        req.body = store
    })
    next();
}
module.exports = jsonParser