import CarCard from "../CarCard/CarCard"

const CarList = ({data}) => {
  return (
    <div>CarList
        <ul>
{data.map(car => (
    <CarCard data={car} key={car.id} /> 
))}
        </ul>
    </div>
  )
}

export default CarList