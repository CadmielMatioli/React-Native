import React from 'react';

import { View, Text, StatusBar, ScrollView} from 'react-native';

import { Title, Container , Input, Image} from './styles';

export default function Main() {
    return( 
        <View style={{flex:1, backgroundColor:'#FFF'}}>
                <StatusBar backgroundColor="#FFF"  barStyle="dark-content" />
                <ScrollView>
                <Text>
                    iwdsidfhskjfhdk
                </Text>
            </ScrollView>
                <Container style={{
                        alignSelf:"center",
                    }}>
                    <Title> Picker Love</Title>
                    <Image  
                    source={
                        require('../images/img_avatar.png')
                    }/>
                    <Image  
                    source={
                        require('../images/img_avatar2.png')
                    }/>
          
                </Container>
        </View>
    );
}