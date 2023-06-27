import { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';

import styled from 'styled-components';

const settings = ['Сортування', 'По зростанню EP', 'По спаданню EP'];

const SortComp = ({ sortBy, setSortBy }) => {
  const [isOpened, setOpened] = useState(false);

  const toggle = () => {
    setOpened(!isOpened);
  };

  const handleListClick = el => {
    setOpened(false);
    setSortBy(el);
  };

  return (
    <Container>
      <HoveredContainer onClick={toggle}>
        {sortBy}
        <Icon isOpened={isOpened}>
          <AiOutlineDown />
        </Icon>
      </HoveredContainer>

      {isOpened && (
        <HiddenContainer>
          <ul>
            {settings.map(el => (
              <ListItem
                key={el}
                onClick={() => {
                  handleListClick(el);
                }}
              >
                <ItemContainer>{el}</ItemContainer>
              </ListItem>
            ))}
          </ul>
        </HiddenContainer>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const HoveredContainer = styled.div`
  width: 167px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(29, 33, 40);
  color: rgb(140, 142, 146);
  padding: 0 10px;
  :hover {
    cursor: pointer;
  }

  :hover span {
    color: rgb(25, 102, 246);
  }
`;

const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  transform: ${p => (p.isOpened ? 'rotate(180deg)' : 'none')};

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const HiddenContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: -115px;
  /* width: 167px; */
  width: 100%;
  background-color: rgb(29, 33, 40);
  /* background-color: red; */
`;

const ListItem = styled.li`
  padding: 10px;

  /* :not(:last-child) {
    margin-bottom: 10px;
  } */
  :hover {
    background-color: gray;
    cursor: pointer;
  }
`;

const ItemContainer = styled.div``;

export default SortComp;
