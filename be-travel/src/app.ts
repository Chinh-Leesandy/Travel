import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import citiesRoutes from './routes/cities';
import blogsRoutes from './routes/blogs'
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/cities', citiesRoutes);
app.use('/api/blogs', blogsRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
