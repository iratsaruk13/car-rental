import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "../redux/cars/selectorsCars";
import { useEffect, useState } from "react";
import { getAllCars } from "../redux/cars/operationsCars";
import CarList from "../components/CarList/CarList";
import Modal from "../components/Modal/Modal";

const Catalog = () => {
const cars = useSelector(selectCars);
const [page /*, setPage*/ ] = useState(1)
const dispatch = useDispatch();


useEffect(() => {
  dispatch(getAllCars(page))

}, [dispatch, page])


  return (
    <div>   
      <CarList data={cars}></CarList>
      
    </div>
  )
}

export default Catalog