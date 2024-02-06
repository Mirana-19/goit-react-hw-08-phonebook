import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/auth/operations';
import {
  Input,
  Label,
  Phonebook,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'styles/Shared.styles';

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(loginUser({ email: email.value, password: password.value }));

    e.target.reset();
  };

  return (
    <Phonebook onSubmit={onSubmit}>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Login</Button>
    </Phonebook>
  );
};

export default Login;
