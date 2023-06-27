import { useEffect, useState } from 'react';
import Spinner from 'components/Spinner';
import styled from 'styled-components';

import ChangeEpBtn from 'components/ChangeEpBtn';
import InputEl from 'components/InputEl';
import EPinfo from 'components/MapsFilters/EPinfo';

import { changeAccEP } from 'api/actions';
import BackBtn from 'components/BackBtn';
import MapsList from 'components/MapsList';
import MapsFilters from 'components/MapsFilters';
import SetBlockedBtn from 'components/SetBlockedBtn';
import EventsList from 'components/EventsList';

import useSort from 'hooks/useSort';

import { settings } from 'settings';

const MIN_EP = settings.minEP;

const MapsPage = ({
  setCurrentAcc,
  currentAcc,
  accMaps: rowMaps,
  setAccMaps,
  ep,
  isLoading,
  setAccEp,
  changeIsDone,
  changeIsFavorite,
  filter,
  setFilter,
  filterAll,
  setFilterAll,
  data,
  reset,
  setAccsPage,
  mainFilter,
  EPdata,
  handleSetAccEp,
}) => {
  const [isChangingEp, setChangingEp] = useState(false);
  const [inpValue, setInpValue] = useState('');
  const [isEpLoading, setEpLoading] = useState(false);
  const btnColor = inpValue !== '';
  const {
    sortBy,
    setSortBy,
    sortedMaps: accMaps,
  } = useSort(rowMaps, filterAll);

  const accEp = mainFilter === 'user' ? ep.isClosed : ep.parserEP;
  const onChangeBtn = () => {
    setChangingEp(true);
  };

  const onApply = async () => {
    if (inpValue === '') {
      return;
    }
    setEpLoading(true);
    try {
      const result = await changeAccEP({
        accountName: currentAcc,
        value: inpValue,
      });
      handleSetAccEp(result.newValue);
    } catch (error) {
      console.log(error);
    } finally {
      setEpLoading(false);
    }

    setChangingEp(false);
    setInpValue('');
  };

  const onDis = () => {
    setChangingEp(false);
    setInpValue('');
  };
  useEffect(() => {
    return () => {
      setAccMaps([]);
      reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setAccMaps]);
  return (
    <>
      <PageHeader>
        <Container>
          <InnerContainer>
            <BackBtn setCurrentAcc={setCurrentAcc} setAccsPage={setAccsPage} />
            <EPinfo EPdata={EPdata} />
          </InnerContainer>
          <InfoContainer>
            <AccInfo>
              <Text>Account:</Text>
              <AccountTxt accEp={accEp}>{currentAcc}</AccountTxt>
            </AccInfo>
            {mainFilter === 'user' && ep.isClosed === 'blocked' ? (
              <></>
            ) : (
              <AccInfo>
                <Text>{mainFilter === 'user' ? 'EP:' : 'Parser EP:'}</Text>
                {isChangingEp ? (
                  <>
                    <InputEl
                      inpValue={inpValue}
                      setInpValue={setInpValue}
                      onApply={onApply}
                    />
                  </>
                ) : (
                  <AccountTxt accEp={accEp}>{!accEp ? 0 : accEp}</AccountTxt>
                )}
              </AccInfo>
            )}

            {mainFilter === 'user' && ep.isClosed !== 'blocked' && (
              <ChangeEpBtn
                isLoading={isLoading}
                isChangingEp={isChangingEp}
                setChangingEp={onChangeBtn}
                onDis={onDis}
                onApply={onApply}
                btnColor={btnColor}
                isEpLoading={isEpLoading}
              />
            )}
            {mainFilter === 'user' && (
              <SetBlockedBtn
                accEp={accEp}
                setAccEp={handleSetAccEp}
                currentAcc={currentAcc}
                isChangingEp={isChangingEp}
              />
            )}
            {/* <Spinner isLoading={isEpLoading} /> */}
          </InfoContainer>
        </Container>
      </PageHeader>

      <PageContainer>
        {!isLoading && (
          <MapsFilters
            filter={filter}
            setFilter={setFilter}
            filterAll={filterAll}
            setFilterAll={setFilterAll}
            data={data}
            EPdata={EPdata}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        )}
        {isLoading ? (
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '48%',
              zIndex: '100',
              color: 'red',
            }}
          >
            <Spinner size={40} isLoading={isLoading} />
          </div>
        ) : (
          <>
            {filterAll === 'required' ? (
              <EventsList
                events={rowMaps}
                currentAcc={currentAcc}
                changeIsDone={changeIsDone}
                changeIsFavorite={changeIsFavorite}
                mainFilter={mainFilter}
              />
            ) : (
              <MapsList
                maps={accMaps}
                currentAcc={currentAcc}
                changeIsDone={changeIsDone}
                changeIsFavorite={changeIsFavorite}
                mainFilter={mainFilter}
              />
            )}
          </>
        )}
      </PageContainer>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  /* display: ${p => (p.f ? 'flex' : 'block')}; */
  display: flex;
  justify-content: space-between;
  padding: 0 80px 0 80px;
  /* padding-top: ${p => (p.m ? '40px' : 0)}; */
  /* align-items: center; */
  text-align: center;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

const PageHeader = styled.div`
  position: fixed;
  z-index: 10;

  width: 100%;
  padding-top: 60px;
  padding-bottom: 10px;

  color: white;
  background-color: rgb(20, 24, 29);
  border-bottom: 1px solid rgb(39, 39, 39);
`;

const Text = styled.p``;

const accountTxtColor = ep => {
  if (ep === 'blocked') {
    return 'red';
  }
  if (ep < MIN_EP) {
    return 'rgb(231, 204, 25)';
  }
  if (ep >= MIN_EP) {
    return '#2edb77';
  }
};

const AccountTxt = styled.p`
  display: flex;

  margin-left: 5px;

  color: ${p => accountTxtColor(p.accEp)};
`;

const AccInfo = styled.div`
  display: flex;
  :not(:last-child) {
    margin-right: 15px;
  }

  height: 20px;
`;

const PageContainer = styled.div`
  padding: 91px 80px 20px 80px;
`;

export default MapsPage;
