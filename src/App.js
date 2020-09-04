import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, Box, Heading, Button, Input, Stack } from "@chakra-ui/core";

function App() {
  function handleClick(e) {
    e.preventDefault();
    console.log('로그인 버튼을 클릭하였습니다.');
    alert("로그인합니다(개발중)")
  }

  return (
      <ThemeProvider>
        <CSSReset />
        <Box padding={4}>
          <Heading>
            지각대장 뿡뿡이
            <span role="img" aria-label="logo">
            ⚡️
          </span>{" "}
            로그인
          </Heading>
          <Stack spacing={3}>
            <Input placeholder="id" size="lg" />
            <Input placeholder="password" size="lg" />
            <Button roundedRight="0" onClick={handleClick}>로그인</Button>
          </Stack>

        </Box>
      </ThemeProvider>
  );
}

export default App;
