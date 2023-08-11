const mongoose = require('mongoose');

mongoose.connect('mongodb://your-server-address/dbName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    const personSchema = new mongoose.Schema({
      name: String,
      email: String,
    });
    const Person = mongoose.model('Person', personSchema);
    
    const newPerson = new Person({
      name: 'Mike Spencer',
      email: 'mikeS@hotmail.com',
    });
    
    newPerson.save()
      .then(savedPerson => {
        console.log('Saved person:', savedPerson);
      })
      .catch(error => {
        console.error('Error saving person:', error);
      });
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });
