import { useState } from 'react';

import styled from 'styled-components';

import useAccount from 'hooks/useAccount';

import AccsPage from './AccsPage';
import MapsPage from './MapsPage';
import DataFilter from 'components/DataFilter';

const UserPage = ({ username }) => {
  const [mainFilter, setMainFilter] = useState('user');
  const [, setAccsPage] = useState(true);

  const {
    currentAcc,
    setCurrentAcc,
    accMaps,
    setAccMaps,
    accEp,
    setAccEp,
    isLoading,
    changeIsDone,
    changeIsFavorite,
    filter,
    setFilter,
    setFilterAll,
    filterAll,
    data,
    reset,
    EPdata,
    handleSetAccEp,
  } = useAccount();

  return (
    <>
      <Header>
        <HeaderContainer>
          <div>
            <p>{username}</p>
          </div>
          <DataFilter mainFilter={mainFilter} setMainFilter={setMainFilter} />
        </HeaderContainer>
      </Header>

      {currentAcc ? (
        <MapsPage
          setCurrentAcc={setCurrentAcc}
          currentAcc={currentAcc}
          accMaps={accMaps}
          setAccMaps={setAccMaps}
          mainFilter={mainFilter}
          ep={accEp}
          setAccEp={setAccEp}
          isLoading={isLoading}
          changeIsDone={changeIsDone}
          changeIsFavorite={changeIsFavorite}
          filter={filter}
          setFilter={setFilter}
          filterAll={filterAll}
          setFilterAll={setFilterAll}
          data={data}
          reset={reset}
          setAccsPage={setAccsPage}
          EPdata={EPdata}
          handleSetAccEp={handleSetAccEp}
        />
      ) : (
        <AccsPage
          setCurrentAcc={setCurrentAcc}
          setAccEp={setAccEp}
          mainFilter={mainFilter}
          setAccsPage={setAccsPage}
        />
      )}
    </>
  );
};

export const Container = styled.div`
  /* display: ${p => (p.f ? 'flex' : 'block')}; */
  padding: 0 80px 0 80px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-around; */
  /* padding-top: ${p => (p.m ? '40px' : 0)}; */
`;

const Header = styled.div`
  /* padding: 0 80px 0 80px; */
  padding-top: 10px;
  padding-bottom: 10px;
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: rgb(20, 24, 29);
  border-bottom: 1px solid rgb(39, 39, 39);
  /* height: 40px; */
  color: white;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
`;

const HeaderContainer = styled.div`
  padding: 0 80px 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default UserPage;
