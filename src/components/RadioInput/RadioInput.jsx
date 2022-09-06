import { InputRadioStyled, LabelRadio } from 'components';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from 'redux/color-Slice';

export const RadioInput = ({ radioOptions }) => {
  const color = useSelector(state => state.contacts.color);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setColor(e.target.value));
  };

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
