import { CarContainer, CarImg, CarInfoItem, CarInfoList, CarName, CarNameAccent, LearnMoreBtn, NextCarInfoList, TitleWrapper } from "./CarCard.styled";

const CarCard = ({data}) => {
    console.log(data);

  return (
    <CarContainer>
       {data.map((car) => (
        <div key={car.id}>
          <CarImg src={car.img} alt={`${car.make} ${car.model}`} width={274} height={268}/>
          <TitleWrapper>
            <p>{car.make} <CarNameAccent>{car.model}</CarNameAccent>, {car.year} </p>
            {car.rentalPrice}
            </TitleWrapper>
            <CarInfoList>
                <CarInfoItem>{car.city}</CarInfoItem>
                <CarInfoItem>{car.country}</CarInfoItem>
                <CarInfoItem>{car.rentalCompany}</CarInfoItem>
            </CarInfoList>
            <NextCarInfoList>
            <CarInfoItem>{car.type}</CarInfoItem>
            <CarInfoItem>{car.make}</CarInfoItem>
            <CarInfoItem>{car.id}</CarInfoItem>
            <CarInfoItem>{car.functionalities[0]}</CarInfoItem>
            </NextCarInfoList>
            <LearnMoreBtn type="button"> Learn more</LearnMoreBtn>

          
        </div>
      ))}
    </CarContainer>
  );
};

export default CarCard