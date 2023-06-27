import { changeAccEP } from 'api/actions';

import { useState } from 'react';

import styled from 'styled-components';

const SetBlockedBtn = ({ accEp, setAccEp, currentAcc, isChangingEp }) => {
  const [isLoading, setLoading] = useState(false);

  const onClick = async () => {
    if (isLoading || isChangingEp) {
      return;
    }
    setLoading(true);
    try {
      await changeAccEP({
        accountName: currentAcc,
        value: accEp === 'blocked' ? '0' : 'blocked',
      });
      setAccEp(accEp === 'blocked' ? '0' : 'blocked');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container
        accEp={accEp === 'blocked'}
        onClick={onClick}
        isLoading={isLoading || isChangingEp}
      >
        <Text>{accEp === 'blocked' ? 'Blocked' : 'Not blocked'}</Text>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: 15px;
  font-size: 14px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p =>
    p.isLoading ? 'gray' : p.accEp ? 'red' : 'rgb(64, 155, 22)'};
  width: 90px;

  cursor: ${p => (p.isLoading ? 'default' : 'pointer')};
  border-radius: 3px;
  :hover {
    background-color: ${p =>
      p.isLoading
        ? 'gray'
        : p.accEp
        ? 'rgba(64, 155, 22,0.5)'
        : 'rgba(243, 12, 12, 0.5)'};
  }
`;

const Text = styled.p`
  color: rgb(255, 255, 234);
`;

export default SetBlockedBtn;
