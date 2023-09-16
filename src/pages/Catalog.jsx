import { useSelector } from "react-redux";
import { selectCars } from "../redux/cars/selectorsCars";

const Catalog = () => {
const cars = useSelector(selectCars);
console.log(cars);

  return (
    <div>Catalog</div>
  )
}

export default Catalog