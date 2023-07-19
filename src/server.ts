import {app} from './app'

const port = process.env.PORT || 5000


const server = app.listen(port,()=>console.log(`Server online in port ${port}`))
process.on('SIGINT',()=>{
server.close()
console.log('Server offline')
})

