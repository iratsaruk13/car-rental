import { HomeContainer, HomeText, HomeTitle, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>You need a car?</HomeTitle>
      <HomeText>Big or small we have them all!</HomeText>
      <HomeText>
        Go to the <StyledLink to="catalog">Catalog</StyledLink>
      </HomeText>
    </HomeContainer>
  );
};

export default Home;
