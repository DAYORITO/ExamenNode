const {mongoose}= require('mongoose');

dbConection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_CNN);
        console.log('Coneccion establecida');
    }catch(e){
        console.log(e)
    }
}
module.exports = dbConection;