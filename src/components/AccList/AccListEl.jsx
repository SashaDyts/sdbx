import styled from 'styled-components';

import { settings } from 'settings';

import EP from './EP';

const MIN_EP = settings.minEP;

const AccListEl = ({
  item,
  setCurrentAcc,
  setAccEp,
  setAccsPage,
  mainFilter,
}) => {
  const epToShow = mainFilter === 'user' ? item.isClosed : item.parserEP;

  const handleAccClick = () => {
    setCurrentAcc(item.account);
    setAccsPage(false);
    setAccEp({ isClosed: item.isClosed, parserEP: item.parserEP });
  };
  return (
    <Container
      isClosed={epToShow}
      userEP={item.isClosed}
      onClick={handleAccClick}
    >
      {item.account}
      <EP ep={epToShow} userEP={item.isClosed} minEp={MIN_EP} />
    </Container>
  );
};

const containerBorderColor = (isClosed, userEP) => {
  if (userEP === 'blocked') {
    return 'red';
  }

  if (Number(isClosed) >= MIN_EP) {
    return '#2edb77';
  }
  if (Number(isClosed) < MIN_EP || isClosed === undefined) {
    return 'rgb(231, 204, 25)';
  }
};

const containerBacgroundColor = (isClosed, userEP) => {
  if (userEP === 'blocked') {
    return 'rgba(255, 0, 0, 0.3)';
  }

  if (Number(isClosed) >= MIN_EP) {
    return 'rgba(82, 181, 117,0.3)';
  }
  if (Number(isClosed) < MIN_EP || isClosed === undefined) {
    return 'rgba(231, 204, 25,0.3)';
  }
};

const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 10px;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 255, 234);
  background-color: rgb(20, 24, 29);
  border: 1px solid ${e => containerBorderColor(e.isClosed, e.userEP)};

  border-radius: 4px;

  &:hover {
    background-color: ${e => containerBacgroundColor(e.isClosed, e.userEP)};
  }
`;

export default AccListEl;
