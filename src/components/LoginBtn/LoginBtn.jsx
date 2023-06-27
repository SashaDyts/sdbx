const LoginBtn = ({ socket }) => {
  const handleClick = () => {
    if (socket) {
      window.open(`http://t.me/sdbx_loginbot?start=${socket.id}`);
    }
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        go
      </button>
    </>
  );
};

export default LoginBtn;
