import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #8B10AE;
`;


export const Title = styled.Text`
    position: absolute;
    width: 100%;
    top: 25%;
    font-family:Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`;
export const Input = styled.TextInput.attrs({
  })`

    width: 50%;
    height:6%;
    padding:3px;
    position:absolute;
    top:45%;
    left: 25%;
    color: #8B10AE;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    border-radius: 10px;


  `;
