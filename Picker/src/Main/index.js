import React from 'react';

import { View, StatusBar, TextInput} from 'react-native';

import { Title, Container , Input} from './styles';

export default function Main() {
    return(  
        <Container>
            <StatusBar backgroundColor="#8B10AE" barStyle="light-content" />
            <Title> 
                Picker 
            </Title>
            <Input placeholder="Username" placeholderTextColor="#BDBDBD" ></Input>
            {/* <Input placeholder="Password" placeholderTextColor="#BDBDBD" ></Input> */}
        </Container>
    );
}