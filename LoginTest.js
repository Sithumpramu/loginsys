import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './src/Components/Login';

test('Login form submits with email and password', () => {
  const mockLogin = jest.fn();
  render(<Login onLogin={mockLogin} />);

  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });

  fireEvent.click(screen.getByText('Login'));

  expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
});