import { CarContainer, CarImg, CarInfoItem, CarInfoList, CarNameAccent, LearnMoreBtn, NextCarInfoList, TitleWrapper } from "./CarCard.styled";

const CarCard = ({data}) => {
    console.log(data);
    const {
        id,
        img,
        make,
        model,
        year,
        rentalPrice,
        city, 
        country,
        address,
        rentalCompany,
        type,
        functionalities
      } = data;

  return (
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
            <LearnMoreBtn type="button"> Learn more</LearnMoreBtn>

          
     
      
    </CarContainer>
  );
};

export default CarCard