import { useState, useEffect } from 'react';
import { InputRadioStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'hooks';

export const RadioInput = ({ onChangeBtn, radioOptions }) => {
  const [color, setColor] = useState('');
  const [value] = useLocalStorage('contacts', []);

  const onChange = e => {
    setColor(e.target.value);
    onChangeBtn(e.currentTarget.value);
  };

  useEffect(() => {
    const localStorageData = value;
    if (localStorageData) {
      setColor(localStorageData.color);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {radioOptions.map(el => (
        <LabelRadio key={el}>
          <InputRadioStyled
            name="color"
            type="radio"
            checked={color === { el }}
            onChange={onChange}
            value={el}
          />
          {el}
        </LabelRadio>
      ))}
      {/* <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === { el }}
          onChange={onChange}
          value={el}
        />
        {el}{' '}
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'red'}
          onChange={onChange}
          value="red"
        />
        Red
      </LabelRadio>
      <LabelRadio>
        <InputRadioStyled
          name="color"
          type="radio"
          checked={color === 'grey'}
          onChange={onChange}
          value="grey"
        />
        Grey
      </LabelRadio> */}
    </>
  );
};

RadioInput.propTypes = {
  onChange: PropTypes.func,
  radioOptions: PropTypes.array,
};
