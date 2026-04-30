import {MongoClient} from 'mongodb'
import {} from 'dotenv/config'
MongoClient.connect(process.env.DB, (err, database) => {
    if (err) throw err
    console.log('Connected to database..')
    let employee = {
        name:'Kokoro Kringle',
        extension: '4442',
        email: 'koko@employees.co',
        title: 'CEO',
        dateHired: Date.now(),
        currentlyEmployed: true
    }
    database.db('Employee')
        .collection('employee')
        .insertOne(employee, (err, res) => {
            if (err) throw err
            console.log('1 document inserted')
            database.close()
        })

})