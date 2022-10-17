import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import LoginWrapper from "../login/LoginWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onClickRegister = () => {
    axios.post("http://43.201.8.111:3001/user/register", {
      id: userId,
      password: password,
      name: nickname,
    });
    let isRegister = confirm("Register successfully. Go to the login page?");
    if (isRegister) {
      navigate("../");
    }
  };

  return (
    <LoginWrapper>
      <h1>회원 가입</h1>
      <InputWrapper>
        <Input
          type="text"
          value={nickname}
          onChange={handleNickname}
          placeholder={"Nickname:"}
        />
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
