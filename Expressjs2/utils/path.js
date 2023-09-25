const path=require('path')
const rootDir=path.dirname(require.main.filename)
const viwePath=(view)=>{
    return path.join(rootDir,'views',view)
}
module.exports=viwePath;