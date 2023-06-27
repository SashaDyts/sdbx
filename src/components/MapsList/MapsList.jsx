import styled from 'styled-components';

import { useState, useEffect } from 'react';

import MapsListItem from './MapsListItem';

const MapsList = ({
  maps,
  currentAcc,
  changeIsDone,
  changeIsFavorite,
  mainFilter,
}) => {
  const [openedItem, setOpenedItem] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleClick = e => {
      const shouldntClose =
        e.target.textContent === 'done' ||
        e.target.textContent === 'Done' ||
        e.target.textContent === 'fail' ||
        e.target.textContent === 'Fail';

      if (!shouldntClose && openedItem !== '' && !isLoading) {
        setOpenedItem('');
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [isLoading, openedItem]);

  return (
    <List>
      {maps.map(el => (
        <Item key={el.mapName}>
          <MapsListItem
            item={el}
            currentAcc={currentAcc}
            changeIsDone={changeIsDone}
            changeIsFavorite={changeIsFavorite}
            mainFilter={mainFilter}
            openedItem={openedItem}
            setOpenedItem={setOpenedItem}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  /* margin-top: 20px; */
`;

const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default MapsList;
