import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";




// // For Testing Purposes Only:

import Login from "./containers/Login";

ReactDOM.render(
  <React.StrictMode>
     <ChakraProvider>
      <ColorModeProvider
      options={{
        useSystemColorMode: true,
      }}
    >
      <Login />
    </ColorModeProvider>
  </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

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
