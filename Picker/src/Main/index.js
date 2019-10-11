import React from 'react';

import { View, Text, StatusBar, ScrollView} from 'react-native';

import { Title, Container , Input, Image} from './styles';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import Page1 from '../Routes/Page1';
import Page2 from '../Routes/Page2';

export default function Main() {
    const Routes = createAppContainer(
        createStackNavigator({
          Home: Page1,
          About: Page2,
        })
      );
      return( 
          
          <View style={{flex:1, backgroundColor:'#FFF'}}>
                <StatusBar backgroundColor="#FFF"  barStyle="dark-content" />
                {/* <ScrollView>
                <Text>
                iwdsidfhskjfhdk
                </Text>
            </ScrollView> */}
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