import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { Delete, Edit } from './Contactitem.styled';

const ContactItem = ({
  name: nameValue,
  number: numberValue,
  id,
  deleteContact,
}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;

      case 'number':
        setNumber(e.target.value);
        return;

      default:
        return;
    }
  };

  const handleCengeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);

      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };

  return (
    <>
      {isEdit ? (
        <input name="name" onChange={handleChange} type="text" value={name} />
      ) : (
        <p>{name} :</p>
      )}
      {isEdit ? (
        <input
          name="number"
          onChange={handleChange}
          type="text"
          value={number}
        />
      ) : (
        <p>{number}</p>
      )}
      <Edit onClick={handleCengeMode}>{isEdit ? 'Save' : 'Edit'}</Edit>
      <Delete onClick={deleteContact}>Delete</Delete>
    </>
  );
};

export default ContactItem;
