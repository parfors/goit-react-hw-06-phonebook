import { InputCheckStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CheckBoxInput = ({ onChange }) => {
  const [agreement, setAgreement] = useState(false);

  const changeHandler = () => {
    setAgreement(prevState => {
      return !prevState;
    });
    onChange();
  };

  return (
    <>
      <LabelRadio>
        <InputCheckStyled
          onChange={changeHandler}
          type="checkBox"
          checked={agreement}
        />
        I agree
      </LabelRadio>
    </>
  );
};

CheckBoxInput.propTypes = {
  onChange: PropTypes.func,
};
