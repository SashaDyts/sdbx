import UserPage from 'pages/UserPage';
import LoginPage from 'pages/LoginPage';
import { useState } from 'react';

window.scrollTo(0, 1);
export const App = () => {
  const [isLoggined, setIsLoggined] = useState(false);
  const [username, setUsername] = useState(null);

  return (
    <>
      {isLoggined ? (
        <UserPage username={username} />
      ) : (
        <LoginPage setIsLoggined={setIsLoggined} setUsername={setUsername} />
      )}
    </>
  );
};
