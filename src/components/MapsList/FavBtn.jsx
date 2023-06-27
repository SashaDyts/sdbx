import { useState } from 'react';

import styled from 'styled-components';

import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

import { favorites } from 'api/actions';

const FavBtn = ({ isFavorite, changeIsFavorite, map }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading) {
      return;
    }

    setLoading(true);

    try {
      await favorites({ map, action: !isFavorite + '' });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }

    changeIsFavorite(map, !isFavorite);
  };

  return (
    <>
      {isFavorite ? (
        <SpanF onClick={handleClick} isLoading={isLoading}>
          <MdFavorite />
        </SpanF>
      ) : (
        <Span onClick={handleClick} isLoading={isLoading}>
          <MdFavoriteBorder />
        </Span>
      )}
    </>
  );
};

const SpanF = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${p => (p.isLoading ? 'gray' : 'rgb(5, 231, 255)')};

  margin-right: 5px;

  cursor: ${p => (p.isLoading ? 'auto' : 'pointer')};

  :hover {
    color: ${p => (p.isLoading ? 'gray' : 'white')};
  }
`;

const Span = styled.span`
  display: inline-flex;
  align-items: center;

  color: ${p => (p.isLoading ? 'gray' : 'white')};
  margin-right: 5px;

  cursor: ${p => (p.isLoading ? 'auto' : 'pointer')};

  :hover {
    color: ${p => (p.isLoading ? 'gray' : 'rgb(95, 208, 221)')};
  }
`;

export default FavBtn;
