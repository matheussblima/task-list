import React, { Component } from 'react';
import { 
  View, 
  NavigationBar, 
  Title, 
  ListView, 
  Icon, 
  Subtitle, 
  Divider, 
  Row, 
  Button,
  Text } from "@shoutem/ui";
  import { Container } from '../../components';

import styles from './styles';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 0,
          name: "Fazer bolo",
          descricao: "Fazer o bolo amanhã"
        },
        {
          id: 0,
          name: "Fazer bolo",
          descricao: "Fazer o bolo amanhã"
        }
      ]
    };
  }

  onPressPlus = () => {}

  renderRowList(data) {
    return(
      <View>
        <Row styleName="small">
          <Icon name="page" />
          <View styleName="vertical">
            <Subtitle>{data.name}</Subtitle>
            <Text numberOfLines={1}>{data.descricao}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    const { data } = this.state;

    if(!data.length > 0) {
      return(
        <Container>
          <NavigationBar 
            centerComponent={<Title>TAREFAS</Title>}
            rightComponent={(
              <Button styleName="clear" onPress={() => this.onPressPlus()}>
                <Icon name="plus-button" />
              </Button>
            )}
          />
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Você não tem tarefas</Text>
          </View>
        </Container>
      );
    } 

    return (
      <Container>
        <NavigationBar 
          centerComponent={<Title>TAREFAS</Title>}
          rightComponent={(
            <Button styleName="clear" onPress={() => this.onPressPlus()}>
              <Icon name="plus-button" />
            </Button>
          )}
          />

        <View style={styles.containerList}>
          <ListView data={data} renderRow={this.renderRowList} />
        </View>
      </Container>
    )
  }
}

export default Home;