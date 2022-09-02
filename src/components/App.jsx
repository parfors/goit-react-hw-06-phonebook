import { useState, useEffect, useRef } from 'react';
import {
  Form,
  SectionStyled,
  ContactsList,
  Filter,
  TitleStyled,
  RadioInput,
} from 'components';
import { useLocalStorage } from 'hooks';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, setContacts, setFilter } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  // const [filter, setFilter] = useState('');
  const [color, setColor] = useState('');
  const localRef = useRef(true);
  const [value, setValue] = useLocalStorage('contacts', []);

  useEffect(() => {
    const localStorageData = value;
    if (localStorageData.length !== 0) {
      dispatch(setContacts(localStorageData.contacts));
      setColor(localStorageData.color);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (localRef.current === true) {
      localRef.current = false;
      return;
    }
    const item = { contacts, color };
    setValue(item);
  }, [contacts, color, localRef, setValue]);

  const formSubmitHandler = data => {
    const normalizedData = data.name.toLowerCase();
    if (contacts.some(el => el.name.toLowerCase() === normalizedData)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    dispatch(addContact(data));
    // setContacts(prevState => [data, ...prevState]);
  };

  const radioBtnChangeHandler = data => {
    setColor(data);
  };

  const radioOptions = ['green', 'red', 'grey'];
  const normalizedFilter = filter.toLowerCase();
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
        <ContactsList
          contacts={visibleContacts}
          // onBtnDelete={id =>
          //   setContacts(prevState => prevState.filter(el => el.id !== id))
          // }
        />
        <RadioInput
          radioOptions={radioOptions}
          onChangeBtn={radioBtnChangeHandler}
        />
      </SectionStyled>
    </>
  );
};
