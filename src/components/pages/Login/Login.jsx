import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(loginUser({ email: email.value, password: password.value }));

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
