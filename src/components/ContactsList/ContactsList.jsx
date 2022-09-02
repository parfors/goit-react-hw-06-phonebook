import { ListStyled, ContactItem } from 'components';
import PropTypes from 'prop-types';
import { memo } from 'react';

const ContactsListTest = ({ contacts }) => {
  return (
    <>
      <ListStyled>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            // onBtnDelete={() => onBtnDelete(id)}
          />
        ))}
      </ListStyled>
    </>
  );
};
export const ContactsList = memo(ContactsListTest);

ContactsList.propTypes = {
  contacts: PropTypes.array,
  onBtnDelete: PropTypes.func,
};
