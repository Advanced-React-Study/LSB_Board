import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import LoginWrapper from "../login/LoginWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";

const Register = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickRegister = () => {
    axios.post("http://43.201.8.111:3001/user/register", {
      id: userId,
      password: password,
    });
    alert("Register successfully");
  };

  return (
    <LoginWrapper>
      <h1>회원 가입</h1>
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
      <Button onClick={onClickRegister}>register</Button>
    </LoginWrapper>
  );
};

export default Register;
