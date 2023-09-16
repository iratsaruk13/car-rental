import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../redux/cars/selectorsCars";
import { useEffect, useState } from "react";
import { getAllCars } from "../redux/cars/operationsCars";
import CarCard from "../components/CarCard/CarCard";

const Catalog = () => {
const cars = useSelector(selectCars);
const [page /*, setPage*/ ] = useState(1)
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getAllCars(page))

}, [dispatch, page])


  return (
    <div>   
      <CarCard data={cars}> </CarCard>
    </div>
  )
}

export default Catalog