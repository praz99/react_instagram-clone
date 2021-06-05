import { useContext, useState } from 'react';
import userContext from '../context/user';

export default function usePhotos() {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = '' }
  } = useContext(userContext);

  return { photos };
}
