import * as dogsAPI from '../services/dog-api';

const BreedsPage: React.FC = () => {
  const data = dogsAPI.fetchBreedsList();
  console.log(data);

  return <div>BreedsPage</div>;
};
export default BreedsPage;
