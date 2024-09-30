import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Components/Login';

test('Login form submits with email and password', () => {
  const mockLogin = jest.fn();
  
  // Render the Login component
  render(<Login onLogin={mockLogin} />);

  // Simulate entering email and password
  fireEvent.change(screen.getByPlaceholderText('Email'), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Password'), {
    target: { value: 'password123' },
  });

  // Simulate clicking the login button (or submitting the form)
  fireEvent.click(screen.getByText('Login'));

  // Expect the mock function to have been called with the right arguments
  expect(mockLogin).toHaveBeenCalledWith('test@example.com', 'password123');
});
