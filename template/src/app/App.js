import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { Container } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">React App</Container>
    </ThemeProvider>
  );
}
