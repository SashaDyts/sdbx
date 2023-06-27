import { useState } from 'react';
import { login } from 'api/auth';

const useLogin = (setIsLoggined, setUsername) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [tgNick, setTgNick] = useState('');

  const handleSetPassword = e => {
    setPassword(e.target.value);
    setError(null);
  };
  const handleSetTgNick = e => {
    setTgNick(e.target.value);
    setError(null);
  };

  const onLogin = async e => {
    e.preventDefault();

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      if (password === '' && tgNick === '') {
        setError({ message: 'Nick and password is required' });
        return;
      }
      if (password === '') {
        setError({ message: 'Password is required' });
        return;
      }
      if (tgNick === '') {
        setError({ message: 'Nick is required' });
        return;
      }
      const data = await login({ password, tgNick });
      setUsername(data.name);
      setIsLoggined(true);
    } catch (error) {
      setError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    error,
    isLoading,
    setPassword: handleSetPassword,
    setTgNick: handleSetTgNick,
    onLogin,
    password,
    tgNick,
  };
};

export default useLogin;
