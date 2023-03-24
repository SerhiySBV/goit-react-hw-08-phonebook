import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Username
        <input
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
        />
      </label>
      <label>
        Email
        <input
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
        />
      </label>
      <label>
        Password
        <input
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
        />
      </label>
      <button variant="contained" size="large" type="submit">
        Register
      </button>
    </form>
  );
};
