import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);

  return !profiles ? <Skeleton count={10} height={150} className="mt-5" /> : <p>Hello</p>;
}

export default Suggestions;

Suggestions.propTypes = {
  userId: PropTypes.string
};
