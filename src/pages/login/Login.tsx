import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import LoginWrapper from "./LoginWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post("http://43.201.8.111:3001/user/login", {
        id: userId,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        alert("Login successfully");
        navigate("../board");
      })
      .catch((e) => {
        console.log("No");
      });
  };

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
      <a href="/register">회원 가입</a>
    </LoginWrapper>
  );
};

export default Login;
