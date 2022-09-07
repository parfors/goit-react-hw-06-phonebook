import {
  ContactsList,
  Filter,
  Form,
  RadioInput,
  SectionStyled,
  TitleStyled,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contact-Slice';
import { setFilter } from 'redux/filter-Slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const color = useSelector(state => state.contacts.color);

  const formSubmitHandler = data => {
    const normalizedData = data.name.toLowerCase();
    if (contacts.some(el => el.name.toLowerCase() === normalizedData)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
  };

  const radioOptions = ['green', 'red', 'grey'];
  const normalizedFilter = filter.toLowerCase();
  console.log(contacts);
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <SectionStyled style={{ backgroundColor: color }}>
        <TitleStyled>Phonebook</TitleStyled>
        <Form onSubmit={formSubmitHandler} />
        <TitleStyled>Contacts</TitleStyled>
        <Filter
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
        <ContactsList contacts={visibleContacts} />
        <RadioInput radioOptions={radioOptions} />
      </SectionStyled>
    </>
  );
};
