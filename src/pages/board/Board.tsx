import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import BoardWrapper from "./BoardWrapper";
import InputWrapper from "../../components/InputWrapper";
import Button from "../../components/Button";
import axios from "axios";

const Board = () => {
  return (
    <BoardWrapper>
      <h1>Board</h1>
      <Button>글 쓰기</Button>
    </BoardWrapper>
  );
};

export default Board;
