import styled from 'styled-components';
import { BiEditAlt, BiCheck, BiX } from 'react-icons/bi';
import Spinner from 'components/Spinner';

const ChangeEpBtn = ({
  onApply,
  onDis,
  isChangingEp,
  setChangingEp,
  btnColor,
  isEpLoading,
}) => {
  return (
    <>
      {!isChangingEp ? (
        !isEpLoading && (
          <Btn type="button" onClick={setChangingEp} c="rgb(39, 110, 241)">
            <BiEditAlt size={16} />
          </Btn>
        )
      ) : !isEpLoading ? (
        <>
          <Btn
            type="button"
            onClick={onApply}
            c={btnColor ? 'rgb(11, 250, 55)' : 'rgb(223, 233, 225)'}
          >
            <BiCheck size={16} />
          </Btn>
          <Btn type="button" onClick={onDis} c="rgb(250, 11, 51)">
            <BiX size={16} />
          </Btn>
        </>
      ) : (
        <Spinner isLoading={isEpLoading} size={14} />
      )}
    </>
  );
};
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.c};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 5px;
  }
`;

export default ChangeEpBtn;
