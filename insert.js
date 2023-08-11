const dbConnect = require('./mongodb')

const InsertData = async ()=>{
    let data = await dbConnect();
    let result = await data.insertOne(
        { name: 'John Doe', age: 34, position: 'Med' },
    )
    console.log(result)
}

InsertData();