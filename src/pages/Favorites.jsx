import { useSelector } from 'react-redux';
import { selectFavorite } from '../redux/favorite/selectorsFavorite';
import CarCard from '../components/CarCard/CarCard';
import { FavoriteContainer } from './Favorite.styled';
import FavoriteEmpty from '../components/FavoriteEmpty/FavoriteEmpty';

const Favorites = () => {
  const favorite = useSelector(selectFavorite);

  return (
    <>
      <FavoriteContainer>
        {favorite.length === 0 ? (
          <FavoriteEmpty />
        ) : (
          favorite.map(car => <CarCard data={car} key={car.id} />)
        )}
      </FavoriteContainer>
    </>
  );
};

export default Favorites;
