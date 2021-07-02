import { ChakraProvider, Button, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

function App() {
  return <Button>Welcome to Chakra + TS</Button>;
}

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        py: 8
      }
    }
  }
});

const rootElement = document.getElementById("root");
render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  rootElement
);
