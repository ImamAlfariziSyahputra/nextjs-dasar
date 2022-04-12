import { comments } from '../../../data/comments';

export default function handler(req, res) {
  // Get By Id
  if (req.method === 'GET') {
    const { commentId } = req.query;
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    if (!comment) res.status(404).json({ message: 'Comment not found' });

    res.status(200).json(comment);
  }

  // Delete By Id
  if (req.method === 'DELETE') {
    console.log('Delete Comment API Hit');
    const { commentId } = req.query;

    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId)
    );

    const idx = comments.findIndex(
      (comment) => comment.id === parseInt(commentId)
    );

    comments.splice(idx, 1);

    // console.log('Comments after Delete => ', comments);

    res.status(200).json(deletedComment);
  }
}
