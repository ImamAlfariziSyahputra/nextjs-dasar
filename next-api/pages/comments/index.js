import React, { useState } from 'react';

const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '1rem',
};

const divStyle2 = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '1rem',
};

const btnStyle = {
  padding: '.4rem .7rem',
  cursor: 'pointer',
};

export default function Comments() {
  const [comments, setComments] = useState(null);
  const [comment, setComment] = useState('');

  const getComments = async () => {
    const res = await fetch(`http://localhost:3000/api/comments`);
    const comments = await res.json();

    setComments(comments);
  };

  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:3000/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    // reload comments
    getComments();
    // reset input
    setComment('');

    console.log('data => ', data);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();

    // reload comments
    getComments();

    console.log('data => ', data);
  };

  // console.log('comments => ', comments);

  return (
    <div style={divStyle}>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <button onClick={getComments}>Load Comments</button>
      {comments &&
        comments.map((comment) => (
          <div key={comment.id} style={divStyle2}>
            <h1>
              {comment.id}. {comment.text}
            </h1>
            <div>
              <button style={btnStyle} onClick={() => handleDelete(comment.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
