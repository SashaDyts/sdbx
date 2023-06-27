import { useEffect, useRef } from 'react';

import styled from 'styled-components';

const InputEl = ({ inpValue, setInpValue, onApply }) => {
  const inputEl = useRef();

  const handleInputChange = e => {
    if (inpValue.length > 2) {
      setInpValue('');
      return;
    }

    setInpValue(e.target.value);
  };

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        onApply();
      }}
    >
      <Input
        type="number"
        onChange={handleInputChange}
        value={inpValue}
        ref={inputEl}
      />
    </Form>
  );
};

const Input = styled.input`
  background-color: rgb(29, 33, 40);
  border: none;
  border-radius: 2px;
  color: white;
  padding: 0 0px 0 4px;
  margin-left: 5px;
  width: 30px;
  height: 100%;

  &:focus-visible {
    outline: 2px solid rgb(25, 102, 246);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Form = styled.form`
  height: 20px;
`;

export default InputEl;
