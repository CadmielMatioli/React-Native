import React from 'react';

import { View, Text, StatusBar, Image} from 'react-native';

import { Title, Container , Input} from './styles';

export default function Main() {
    return( 
        <View style={{flex:1, backgroundColor:'#FFF'}}>
            <StatusBar backgroundColor="#FFF"  barStyle="dark-content" />
            <Container style={{
                    alignSelf:"center",
                }}>
                <Title> Picker Love</Title>
                <Image  
                style={{
                    width: 50, 
                    height: 50, 
                    borderRadius:100,
                    padding:10
                }} 
                source={
                    require('../images/img_avatar.png')
                }/>
            </Container>
        </View>
    );
}