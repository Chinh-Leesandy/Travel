import { Router } from 'express';
import { cities } from '../data/dataCities';

const router = Router();

router.get('/', (req, res) => {
  res.json(cities);
});

router.get('/:id', (req, res) => {
  const cityId = parseInt(req.params.id);
  const city = cities.find(city => city.id === cityId);

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ message: 'City not found' });
  }
});

export default router;
