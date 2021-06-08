import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';

function Comments({ docId, comments: allComments, posted, commentInput }) {
  const [comments, setComments] = useState(allComments);

  return (
    <>
      <p>I am a comment!</p>
    </>
  );
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.string.isRequired
};

export default Comments;
