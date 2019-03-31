import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import SignInClass from './SignInClass';

afterEach(cleanup);

test('Should run submit function when pressed submit button', () => {
  const fakeSignIn = jest.fn();
  const { container, getByText } = render(<SignInClass signIn={fakeSignIn} />);

  const formNode = container.querySelector('form');
  const submitButtonNode = getByText('Submit');

  expect(submitButtonNode.type).toBe('submit');

  fireEvent.submit(formNode);
  expect(fakeSignIn).toHaveBeenCalledTimes(1);

  fireEvent.click(submitButtonNode);
  expect(fakeSignIn).toHaveBeenCalledTimes(2);
});

test('Should call signIn function with value from inputs', () => {
  const fakeSignIn = jest.fn(({ userName, userPassword }) => {});
  const { getByText, getByLabelText } = render(
    <SignInClass signIn={fakeSignIn} />
  );

  const submitButtonNode = getByText('Submit');
  const userNameNode = getByLabelText('User name:');
  const userPasswordNode = getByLabelText('User password:');

  fireEvent.change(userNameNode, { target: { value: 'Yurii' } });
  fireEvent.change(userPasswordNode, { target: { value: 'Password' } });

  expect(userNameNode.value).toBe('Yurii');
  expect(userPasswordNode.value).toBe('Password');

  fireEvent.submit(submitButtonNode);

  expect(fakeSignIn).toHaveBeenCalledTimes(1);
  expect(fakeSignIn).toHaveBeenCalledWith({
    userName: 'Yurii',
    userPassword: 'Password'
  });
});
