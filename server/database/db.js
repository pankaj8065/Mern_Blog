import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

const Connection = (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.1ksgefm.mongodb.net/?retryWrites=true&w=majority`;
    try {
          mongoose.connect(URL, { useNewUrlParser: true })
         
        console.log('Database connected successfully');
         
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;