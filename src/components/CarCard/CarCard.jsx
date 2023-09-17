import { useState } from "react";
import { CarContainer, CarImg, CarInfoItem, CarInfoList, CarNameAccent, LearnMoreBtn, NextCarInfoList, TitleWrapper } from "./CarCard.styled";
import Modal from "../Modal/Modal";

const CarCard = ({data}) => {
    const {
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        city, 
        country,
        rentalCompany,
        type,
        functionalities,
        fuelConsumption, 
        engineSize,
        description,
        accessories,
        age,
        rentalConditions,
                mileage,
      } = data;

const [showModal, setShowModal] = useState(false);

const handleOpenModal = () => {
setShowModal(true);
}

const handleCloseModal = () => {
    setShowModal(false)
}

  return (
   <>
        <CarContainer>
          
              <CarImg src={img} alt={`${make} ${model}`} width={274} height={268}/>
              <TitleWrapper>
                <p>{make} <CarNameAccent>{model}</CarNameAccent>, {year} </p>
                {rentalPrice}
                </TitleWrapper>
                <CarInfoList>
                    <CarInfoItem>{city}</CarInfoItem>
                    <CarInfoItem>{country}</CarInfoItem>
                    <CarInfoItem>{rentalCompany}</CarInfoItem>
                </CarInfoList>
                <NextCarInfoList>
                <CarInfoItem>{type}</CarInfoItem>
                <CarInfoItem>{make}</CarInfoItem>
                <CarInfoItem>{id}</CarInfoItem>
                <CarInfoItem>{functionalities[0]}</CarInfoItem>
                </NextCarInfoList>
                <LearnMoreBtn type="button" onClick={handleOpenModal}> Learn more</LearnMoreBtn>
        </CarContainer>
        {showModal && (
            <Modal onClose={handleCloseModal}>
                <CarImg src={img} alt={`${make} ${model}`} width={461} height={248}/>
                <TitleWrapper>
                <p>{make} <CarNameAccent>{model}</CarNameAccent>, {year} </p>
                {rentalPrice}
                </TitleWrapper>
                <CarInfoList>
                    <CarInfoItem>{city}</CarInfoItem>
                    <CarInfoItem>{country}</CarInfoItem>
                    <CarInfoItem>Id: {id}</CarInfoItem>
                    <CarInfoItem>Year: {year}</CarInfoItem>
                    <CarInfoItem>Type: {type}</CarInfoItem>
                </CarInfoList>
                <NextCarInfoList>
                <CarInfoItem>Fuel Consumption: {fuelConsumption}</CarInfoItem>
                <CarInfoItem>Engine Size: {engineSize}</CarInfoItem>
                <p>
                    {description}
                </p>
                <h3>
                Accessories and functionalities:
                </h3>
                <ul>
                    {accessories.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <ul>
                    {functionalities.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>

                <h3>
                Rental Conditions:
                </h3>
                <ul>
                    <li>Minimum age: {age} </li>
                    <li>{rentalConditions[1]} </li>
                    <li>{rentalConditions[2]} </li>
                    <li>Mileage: {mileage}  </li>
                    <li>Price: {rentalPrice} </li>


                </ul>
                
                </NextCarInfoList>


            </Modal>
        )}
   </>
  );
};

export default CarCard