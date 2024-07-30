import { Router } from 'express';
import db from '../libs/firebaseConfig';

const router = Router();
router.post('/', async (req, res) => {
  try {
    const post = req.body;
    console.log('Received post data:', post);
    const response = await db.collection('blogs').add(post);
    console.log('Document added with ID:', response.id);
    res.status(201).json({ id: response.id });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
router.get('/', async (req, res) => {
  try {
    const snapshot = await db.collection('blogs').get();
    const blogs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(blogs);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await db.collection('blogs').doc(id).get();
    if (!doc.exists) {
      res.status(404).send('Post not found');
    } else {
      res.status(200).json({ id: doc.id, ...doc.data() });
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const post = req.body;
    await db.collection('blogs').doc(id).set(post, { merge: true });
    res.status(200).send('Post updated');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await db.collection('blogs').doc(id).delete();
    res.status(200).send('Post deleted');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.post('/:id/comments', async (req, res) => {
  try {
    const id = req.params.id;
    const comment = req.body;
    const postRef = db.collection('blogs').doc(id);
    await postRef.collection('comment').add(comment);
    res.status(201).send('Comment added');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

router.get('/:id/comments', async (req, res) => {
  try {
    const id = req.params.id;
    const postRef = db.collection('blogs').doc(id);
    const snapshot = await postRef.collection('comment').get();
    const comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.status(200).json(comments);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});


export default router;
