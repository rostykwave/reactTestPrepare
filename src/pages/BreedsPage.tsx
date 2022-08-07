import { useEffect, useState } from 'react';
import { Gallery } from '../components/Gallery/Gallery';
import * as dogsAPI from '../services/dog-api';
import { IBread } from '../types/bread';

const BreedsPage: React.FC = () => {
  const [breeds, setBreeds] = useState<IBread[]>([]);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        const data = await dogsAPI.fetchBreedsList();
        console.log(data[0]);
        setBreeds(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBreeds();
  }, []);

  return (
    <>
      <div>BreedsPage</div>
      {breeds && <Gallery items={breeds} />}
      {/* {breeds && breeds.map(dog => <p key={dog.id}>{dog.name}</p>)} */}
      <div>BreedsPage</div>
    </>
  );
};
export default BreedsPage;
