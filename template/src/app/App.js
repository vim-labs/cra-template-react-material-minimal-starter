import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Container } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">React App</Container>
      </ThemeProvider>
    </>
  );
}
