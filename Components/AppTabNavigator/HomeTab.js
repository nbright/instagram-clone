import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base'; // Container, Content 추가로 import
import CardComponent from '../CardComponent'; // 카드 컴포넌트 추가

export default class HomeTab extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='ios-home' style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <Container style={style.container}>
                <Content>
                {
                    this.state.feeds.map(feed => <CardComponent data={ feed }/>)
                }
                </Content>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});