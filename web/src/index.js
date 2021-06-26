import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <AuthProvider>
          <Router>
            <App />
          </Router>
        </AuthProvider>
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// // For Testing Purposes Only:

// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <ColorModeProvider
//         options={{
//           useSystemColorMode: true,
//         }}
//       >
//         <App />
//       </ColorModeProvider>
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
