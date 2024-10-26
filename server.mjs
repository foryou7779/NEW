import express from 'express';
import { json } from 'express';
import cors from 'cors';
import connectDB from './confign/db';

const app = express();

connectDB();

app.use(cors());
app.use(json());


app.listen(3000, () => {
    console.log(`Server is running on port ${PORT} `);
});
