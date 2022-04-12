import { comments } from '../../../data/comments';

export default function handler(req, res) {
  // Get All
  if (req.method === 'GET') {
    console.log('Get Comments API Hit');
    res.status(200).json(comments);
  }

  // Add
  if (req.method === 'POST') {
    console.log('Add Comment API Hit');
    const { comment } = req.body;

    const newComment = {
      id: Date.now(),
      text: comment,
    };

    comments.push(newComment);

    res.status(200).json(newComment);
  }
}
