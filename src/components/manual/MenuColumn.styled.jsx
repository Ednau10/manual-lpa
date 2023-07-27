// /scr/components/manual/MenuColumn.styled.jsx
import styled from 'styled-components';

export const MenuContainer = styled.div`
margin-top: 0px;
max-width: 20%;
max-height: 400px;
color: #930707;
font-weight: bold;
font-size: small;
margin-right: 1%;
overflow-wrap: break-word;
background-color: white;

`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuListItem = styled.li`
  cursor: pointer;
  padding: 25px;
  background-color: ${({ selected }) => (selected ? '#edeaea' : 'transparent')};


`;
