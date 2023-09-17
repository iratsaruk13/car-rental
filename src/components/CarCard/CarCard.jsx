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
        functionalities
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
            <Modal onClose={handleCloseModal}></Modal>
        )}
   </>
  );
};

export default CarCard