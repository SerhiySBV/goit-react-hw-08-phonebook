import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, editContact } from 'redux/contacts/operations';
import { Delete, Edit } from './Contactitem.styled';

const ContactItem = ({
  contact: { name: nameValue, number: numberValue, id },
}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  const handleChange = e => {
    console.log(e.target.name);
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
      dispatch(editContact());
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
      <Edit onClick={handleCengeMode}> {isEdit ? 'Save' : 'Edit'}</Edit>
      <Delete onClick={() => handleDelete(id)}>Delete</Delete>
    </>
  );
};

export default ContactItem;

//  CREATE BY REDUX

// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { Delete } from './Contactitem.styled';

// const ContactItem = ({ contact: { name, phone, id } }) => {
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <>
//       <p>{name} :</p>
//       <p>{phone}</p>
//       <Delete onClick={handleDelete}>Delete</Delete>
//     </>
//   );
// };

// export default ContactItem;

// CREATED BY HOOK

// import PropTypes from 'prop-types';
// import { Delete } from './Contactitem.styled';

// const ContactItem = ({ name, number, onDeleteContact }) => {
//   return (
//     <>
//       <p>{name} :</p>
//       <p>{number}</p>
//       <Delete onClick={onDeleteContact}>Delete</Delete>
//     </>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactItem;
