/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Realm from 'realm';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';
import { Container, 
         Header, 
         Content, 
         Card, 
         CardItem, 
         Body, 
         Left,
         Right,
         Button,
         Title,
         Icon,
         Text } from 'native-base';

export default class chaldeaNotes extends Component {
  render() {
    let realm = new Realm({
      schema: [{name: 'Dog', properties: {name: 'string'}}]
    });
    realm.write(() => {
      realm.create('Dog',{name: 'Rex'});
    });
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     Welcome to React Native! 你是
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Count of Dogs in Realm: {realm.objects('Dog').length}
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      //   <Image source={require('./anniu.png')} style={{ height: 100, width: 50 }}></Image>
      //   <Button color='red' title='我是一个不正常的按钮'></Button>
      // </View>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   //Your text here
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#00ff00'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('chaldeaNotes', () => chaldeaNotes);
