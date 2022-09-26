import React, { useState, useEffect } from "react";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>로그인</h1>
      <p>로그인 페이지입니다.</p>
      <div>
        <input type="text" onChange={handleUserId} />
      </div>
      <div>
        <input type="password" onChange={handlePassword} />
      </div>
    </div>
  );
};

export default Login;
