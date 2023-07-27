
import styled from 'styled-components';

export const StyledSelectProfile = styled.div`
  top:-30px;
  text-align: center;
  width: 25%;
  height: 60px;
  padding: 10px;
  position: relative;
  display: inline-block;
  background-color: #930707;
  color: white;

  h2 {
    font-size: 16px;
    
  }

  select {
    width: 100%;
    padding: 5px;
    border: 2px solid white;
    border-radius: 5px;
    background-color: #e08282;
    color: rgb(2, 51, 141);
    font-weight: bold;
    cursor: pointer;
    position:relative;
    top:-10px;

  }

  option {
    font-size: 12px;
    background-color: #f1d2d2;
  }
`;
