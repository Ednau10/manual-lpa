import styled from 'styled-components';



export const Container = styled.div`
:root {
  --main-color: #930707; /*color de letra titulo*/
  --main-bg-color: #f7a7b9; /*color de fondo*/
  --second-color: rgb(2, 51, 141); /*color azul*/
  --rest-color: #edeaea; /*color gris barra izq*/
  --rest-color: #555; /*otro gris*/
  
}  
`;

export const Main = styled.main`
height: 480px;
background-color: #ff9f9f;
color: rgb(2, 51, 141);
display: block;
padding: 18px;
border-top: solid #930707 2px;
align-items: start;
}
.content-section {
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  width: 100%;
  height: 380px;
}

.menu-column {
  margin-top: 0px;
  max-width: 20%;
  max-height: 400px;
  color: #930707;
  font-weight: bold;
  font-size: small;
  margin-right: 1%;
  overflow-wrap: break-word;
}

.menu-list {
  list-style: none;
  padding: 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  height: 380px;
  background-color: #edeaea;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow-wrap: break-word;
}

.menu-list li {
  cursor: pointer;
  padding: 20px;
}

.menu-list li:hover {
  background-color: #f1d2d2;
  color: rgb(2, 51, 141);
}

.instructions-column {
  width: 45%;
  /* Agregamos una altura máxima para que se pueda hacer scroll cuando el contenido excede el tamaño */
  max-height: 380px;
  background-color: white;
  /* overflow-y: auto; */
  /* Ajustamos el padding para dar espacio al contenido del scroll */
  padding: 2%;
  /* Habilitamos el scroll cuando el contenido excede la altura máxima */
  overflow-wrap: break-word;
  overscroll-behavior-y: auto;
  word-break: break-all;
  position: relative;
  overscroll-behavior-block: contain;
}

.instructions-column h4 {
  /* Ajustamos el tamaño de fuente para evitar desbordamiento */
  font-size: 14px;
  color: #930707;
  padding-bottom: 5px;
}
.miniTitle {
  font-size: 10px;
  color: #969494;
  padding-bottom: 5px;
}
.instructions-column p {
  /* Ajustamos el tamaño de fuente para evitar desbordamiento */
  font-size: 12px;
  padding: 5px;
  overscroll-behavior: auto;
  /* overflow-anchor:auto ;
  overflow-wrap: break-word; */
}





.navigation-buttons {
  position: fixed;
  top: 490px;
  left: 30%;
}
.btn-next {
  margin-left: 100px;
}
button {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", "Arial", "sans-serif";
  font-size: 10px;
  background-color: rgb(2, 51, 141);
  color: #fff;
  border: none;
  padding: 10px 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 25px;
}

button:hover {
  background-color: #e5a0a0;
  color: rgb(2, 51, 141);
}


.contact-support {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

`;
