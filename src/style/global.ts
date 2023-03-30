import {createGlobalStyle} from 'styled-components';
export const GlobalStyle = createGlobalStyle`

:root {
    --background-login: #f7f8fd;
    --background: #EAEEF0;

    --blue-400: #134e87;
    --blue-500: #114871;
    --blue-700: #05032e;
    
    --grey-300: #b0b6bb;
    --grey-400: #50555a;
    --grey-600: #303030;

    --orange-600: #f56c00;

    --red-600: #ff5c5c;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

input{
    border-radius: 6px;

}

body {
    -webkit-font-smoothing: antialiased;
      /*  font-weight: bold;
    font-size: 3rem; */
}

body, input, textarea, button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
}

button{
    cursor: pointer;
}

`;