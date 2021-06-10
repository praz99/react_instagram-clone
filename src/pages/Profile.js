import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getUserByUsername } from '../services/firebase';

function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    async function checkUserExists() {
      const doesUserExist = await getUserByUsername(username);
    }
  }, []);

  return <p>Hello</p>;
}

Profile.propTypes = {};

export default Profile;
