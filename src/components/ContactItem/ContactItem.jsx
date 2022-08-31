import {
  ParagraphStyled,
  ButtonDeleteStyled,
  ListItem,
  CheckBoxInput,
} from 'components';
import PropTypes from 'prop-types';
import { useState, memo } from 'react';

const ContactItemTest = ({ name, number, onBtnDelete }) => {
  const [agreement, setAgreement] = useState(false);
  return (
    <>
      <ListItem>
        <ParagraphStyled>Name: {name}</ParagraphStyled>
        <ParagraphStyled>Number: {number}</ParagraphStyled>
        <CheckBoxInput onChange={() => setAgreement(!agreement)} />
        <ButtonDeleteStyled
          disabled={!agreement}
          onClick={onBtnDelete}
          type="button"
        >
          Delete
        </ButtonDeleteStyled>
      </ListItem>
    </>
  );
};

export const ContactItem = memo(ContactItemTest);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onBtnDelete: PropTypes.func,
};
