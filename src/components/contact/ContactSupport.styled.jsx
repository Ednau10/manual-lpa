// SupportContact.styled.jsx
import styled from 'styled-components';

export const ContactButton = styled.button`
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
right:20px;
position: fixed;
  bottom: 20px;
  right: 20px;
`;

export const ContactModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #930707);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  color:930707;
  padding: 10px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 100%;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 90px;
  right: 480px;
  font-size: 20px;
  cursor: pointer;
  background-color:rgb(2, 51, 141);
  color:white;
  padding:5px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormButton = styled.button`
  background-color: rgb(2, 51, 141);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormRowLabel = styled.span`
  font-weight: bold;
`;

export const FormRowInput = styled(FormInput)`
  margin-top: 5px;
`;

export const FormRowTextArea = styled(FormTextArea)`
  margin-top: 5px;
`;
