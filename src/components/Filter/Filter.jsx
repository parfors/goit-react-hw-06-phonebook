import { ParagraphStyled, InputStyled } from 'components';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <ParagraphStyled>Find contact by name</ParagraphStyled>
      <InputStyled name="filter" onChange={onChange} value={value} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
