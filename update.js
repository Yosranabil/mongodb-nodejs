const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.findOneAndUpdate(
        {name: 'yosra'},
        {
            $set: {position: 'student'}
        }
    )
    console.log(result)
}

updateData();