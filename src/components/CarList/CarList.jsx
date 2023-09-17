import CarCard from '../CarCard/CarCard';
import { CarsList } from './CarList.styled';

const CarList = ({ data }) => {
  return (
    <div>
      <CarsList>
        {data.map(car => (
          <CarCard data={car} key={car.id} />
        ))}
      </CarsList>
    </div>
  );
};

export default CarList;
