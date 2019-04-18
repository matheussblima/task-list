import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
  Text, 
  TextInput } from "@shoutem/ui";
import { connect } from 'react-redux';
import { addTask, showTask, editTask } from '../../redux/actions';
import { Container } from '../../components';
import Modal from "react-native-modal";

import styles from './styles';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      showModalEdit: false,
      nameTask: null,
      descriptionTask: null,
      data: [],
      itemListPress: []
    };
    this.renderRowList = this.renderRowList.bind(this);
  }

  async componentDidMount() {
   await this.getTasks();
  }

  // Pega as tarefas
  getTasks = async () => {
    const { showTaskDispatch } = this.props;

    const tasksResponse = await showTaskDispatch();
    this.setState({ data: tasksResponse.tasks });
  }

  // Abre o modal para adicionar novas tarefas
  onPressPlus = () => {
    this.setState({ showModal: true });
  }

  // Adicionando tarefas
  onPressAddTask = async () => {
    const { addTaskDispatch } = this.props;
    const { descriptionTask, nameTask } = this.state;

    const taskInfo = {
      id: -1,
      nameTask,
      descriptionTask,
    }

    const responseTask = await addTaskDispatch(taskInfo);
    await this.getTasks();

    if(responseTask.isSuccess){ 
      this.setState({ showModal: false });
    }
    
  }

  // Editar Tarefa
  onPressEditTask = async () => {
    const { editTaskDispatch } = this.props;
    const { nameTask, descriptionTask, itemListPress } = this.state;

    const responseTask = await editTaskDispatch(itemListPress, { descriptionTask: descriptionTask, nameTask: nameTask }  )
    await this.getTasks();

    console.info(responseTask);

    if(responseTask.isSuccess) { 
      this.setState({ showModalEdit: false });
    }
  }

   // Render Modal Editar
   renderModalEdit() {
    const { showModalEdit, nameTask, descriptionTask } = this.state;

    return (
      <View>
        <Modal isVisible={showModalEdit} onBackdropPress={() => this.setState({ showModalEdit: false })}>
          <View style={styles.contanierModal}>
            <Text style={styles.titleModel}>Editar Tarefa</Text>
            <TextInput
                style={styles.inputNameTask}
                value={nameTask}
                placeholder={'Nome'}
                onChangeText={(value) => this.setState({ nameTask: value })}
            />
            <TextInput
                value={descriptionTask}
                placeholder={'Descrição'}
                onChangeText={(value) => this.setState({ descriptionTask: value })}
            />
            <Button style={styles.buttonAddModal} onPress={() => this.onPressEditTask()}>
              <Text style={styles.buttonAddModalText}>EDITAR</Text>
            </Button>
          </View>
        </Modal>
      </View>
    )
  }

  // Render Modal
  renderModal() {
    const { showModal } = this.state;

    return (
      <View>
        <Modal isVisible={showModal} onBackdropPress={() => this.setState({ showModal: false })}>
          <View style={styles.contanierModal}>
            <Text style={styles.titleModel}>Adicione uma Tarefa</Text>
            <TextInput
                style={styles.inputNameTask}
                placeholder={'Nome'}
                onChangeText={(value) => this.setState({ nameTask: value })}
            />
            <TextInput
                placeholder={'Descrição'}
                onChangeText={(value) => this.setState({ descriptionTask: value })}
            />
            <Button style={styles.buttonAddModal} onPress={() => this.onPressAddTask()}>
              <Text style={styles.buttonAddModalText}>ADICIONAR</Text>
            </Button>
          </View>
        </Modal>
      </View>
    )
  }

  // Render ListView
  renderRowList(data) {
    return(
      <TouchableOpacity onPress={() => {
        this.setState({ 
          showModalEdit: true, 
          nameTask: data.nameTask, 
          descriptionTask: data.descriptionTask, 
          itemListPress: data 
        })}
      }>
        <Row styleName="small">
          <Icon name="page" />
          <View styleName="vertical">
            <Subtitle>{data.nameTask}</Subtitle>
            <Text numberOfLines={1}>{data.descriptionTask}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }

  render() {
    const { data } = this.state;

    if(data === undefined || data.length <= 0) {
      return(
        <Container>
          {this.renderModal()}
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
        {this.renderModal()}
        {this.renderModalEdit()}
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


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addTaskDispatch: (name, description) => dispatch(addTask(name, description)),
  editTaskDispatch: (oldTask, newTask) => dispatch(editTask(oldTask, newTask)),
  showTaskDispatch: () => dispatch(showTask())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
