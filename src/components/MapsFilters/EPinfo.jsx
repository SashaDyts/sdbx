import { useState } from 'react';

import styled from 'styled-components';
import { AiFillInfoCircle } from 'react-icons/ai';

const EPinfo = ({ EPdata }) => {
  const [isInfoClosed, setInfoClosed] = useState(true);
  const [textToShow, setTextToShow] = useState('');

  const handleMouseEnter = text => {
    setTextToShow(text);
    setInfoClosed(false);
  };

  const handleMouseLeave = () => {
    setInfoClosed(true);
  };

  const favoritesText =
    'Кількість EP, яку ти отримаєш при виконанні всіх квестів на картах, які додані в "Favorites"';

  const probablyText =
    'Кількість EP, яку ти отримаєш при виконанні всіх квестів на картах, які помічені як "Done"';

  return (
    <Container>
      <Item>
        <Text>Done EP: </Text>
        <EPtext>
          {EPdata.probablyEP}
          <IconContainer>
            <AiFillInfoCircle
              onMouseEnter={() => {
                handleMouseEnter(probablyText);
              }}
              onMouseLeave={handleMouseLeave}
            />
          </IconContainer>
        </EPtext>
      </Item>
      <Item>
        <Text>Favorites EP: </Text>
        <EPtext>
          {EPdata.favoritesEP}
          <IconContainer>
            <AiFillInfoCircle
              onMouseEnter={() => {
                handleMouseEnter(favoritesText);
              }}
              onMouseLeave={handleMouseLeave}
            />
          </IconContainer>
        </EPtext>
      </Item>

      {!isInfoClosed && (
        <InfoContainer>
          <InfoText>{textToShow}</InfoText>
        </InfoContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  /* background-color: rgb(29, 33, 40); */
  /* padding: 0 15px 0; */
`;

const Item = styled.div`
  display: flex;
  :not(:nth-child(2)) {
    margin-right: 20px;
  }
`;

const Text = styled.p``;

const EPtext = styled.p`
  color: rgb(5, 231, 255);
  margin-left: 5px;
`;

const IconContainer = styled.span`
  margin-left: 5px;
  :hover {
    cursor: help;
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  bottom: -86px;
  left: 0;
  background-color: rgb(12, 16, 20);
  /* background-color: red; */
  color: rgb(141, 143, 148);
  max-width: 100%;
  padding: 10px;
  z-index: 10;
`;

const InfoText = styled.p``;

export default EPinfo;
