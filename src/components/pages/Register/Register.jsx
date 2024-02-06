import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    dispatch(
      registerUser({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
