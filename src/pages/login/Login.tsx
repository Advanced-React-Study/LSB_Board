import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import LoginWrapper from "./LoginWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {};

  return (
    <LoginWrapper>
      <h1>로그인</h1>
      <InputWrapper>
        <Input
          type="text"
          value={userId}
          onChange={handleUserId}
          placeholder={"ID:"}
        />

        <Input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder={"PW:"}
        />
      </InputWrapper>
      <Button onClick={onClickLogin}>login</Button>
    </LoginWrapper>
  );
};

export default Login;
