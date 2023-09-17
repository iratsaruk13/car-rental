import { useState } from 'react';
import {
  AccentItem,
  BtnFavorite,
  CarContainer,
  CarDescription,
  CarImg,
  CarInfoItem,
  CarInfoList,
  CarNameAccent,
  CardSubtitle,
  ConditionItem,
  FavoriteSvg,
  LearnMoreBtn,
  NextCarInfoList,
  RentalBtn,
  RentalConditionsList,
  TitleWrapper,
} from './CarCard.styled';
import Modal from '../Modal/Modal';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/sliceFavorite';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/selectorsFavorite';
import heartfillIcon from '../../images/heartFill.svg';
import heartIcon from '../../images/heart.svg';

const CarCard = ({ data }) => {
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
    rentalConditions,
    mileage,
  } = data;

  const [showModal, setShowModal] = useState(false);
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const chooseFavorite = data => {
    if (!favorite.some(car => car.id === data.id)) {
      dispatch(addToFavorite(data));
    } else {
      dispatch(removeFromFavorite(data));
    }
  };

  const formatMileage = mileage => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <CarContainer key={id}>
        <BtnFavorite type="button" onClick={() => chooseFavorite(data)}>
          {favorite.some(car => car.id === data.id) ? (
            <FavoriteSvg>
              <use href={heartfillIcon + '#heart'}></use>
            </FavoriteSvg>
          ) : (
            <FavoriteSvg>
              <use href={heartIcon + '#heart'}></use>
            </FavoriteSvg>
          )}
        </BtnFavorite>
        <CarImg src={img} alt={`${make} ${model}`} width={274} height={268} />
        <TitleWrapper>
          <p>
            {make} <CarNameAccent>{model}</CarNameAccent>, {year}{' '}
          </p>
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
        <LearnMoreBtn type="button" onClick={handleOpenModal}>
          Learn more
        </LearnMoreBtn>
      </CarContainer>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <CarImg src={img} alt={`${make} ${model}`} width={461} height={248} />
          <TitleWrapper>
            <p>
              {make} <CarNameAccent>{model}</CarNameAccent>, {year}{' '}
            </p>
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
            <CarDescription>{description}</CarDescription>
            <CardSubtitle>Accessories and functionalities:</CardSubtitle>
            <CarInfoList>
              {accessories.map(item => (
                <CarInfoItem key={item}>{item}</CarInfoItem>
              ))}
            </CarInfoList>

            <NextCarInfoList>
              {functionalities.map(item => (
                <CarInfoItem key={item}>{item}</CarInfoItem>
              ))}
            </NextCarInfoList>

            <CardSubtitle> Rental Conditions:</CardSubtitle>
            <RentalConditionsList>
              <ConditionItem>{rentalConditions[0]} </ConditionItem>
              <ConditionItem>{rentalConditions[1]} </ConditionItem>
              <ConditionItem>{rentalConditions[2]} </ConditionItem>
              <ConditionItem>
                Mileage: <AccentItem>{formatMileage(mileage)}</AccentItem>{' '}
              </ConditionItem>
              <ConditionItem>
                Price: <AccentItem>{rentalPrice}</AccentItem>{' '}
              </ConditionItem>
            </RentalConditionsList>
          </NextCarInfoList>
          <RentalBtn href="tel:+380730000000">Rental car</RentalBtn>
        </Modal>
      )}
    </>
  );
};

export default CarCard;
