import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/auth/operations';
import {
  Input,
  Label,
  Phonebook,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'styles/Shared.styles';

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
    <Phonebook onSubmit={onSubmit}>
      <Label>
        Name
        <Input type="text" name="name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Phonebook>
  );
};

export default Register;
