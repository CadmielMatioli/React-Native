import React from 'react';

import { View, StatusBar, TextInput} from 'react-native';

import { Title, Container } from './styles';

export default function Main() {
    return(  
        <Container>
            <StatusBar backgroundColor="#8B10AE" barStyle="light-content" />
            <Title> 
                Picker 
            </Title>
            <TextInput
                placeholder="Nome de Usuário..."
                keyboardType={"default"}
                label="Username"
                style={{height:100, borderBottomWidth:1, color:'#FFF', fontSize:20}}
            />
        </Container>
    );
}