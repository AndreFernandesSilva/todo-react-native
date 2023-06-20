import { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./components/Header"
import { List } from './components/List';
import api from './services/api';

export default function App() {
  const [list, setList] = useState([])

  async function onAddNewTask(description) {
    const result = await api.post("/", {
      description
    })

    if (result.status == 201) {
      setList([...list, result.data])
    }

  }

  async function onRemoveTask(taskForRemove) {
    const result = await api.delete("/" + taskForRemove)

    if (result.status == 200) {
      const restTasks = list.filter((item) => item.id !== taskForRemove)
      setList(restTasks)
    }
  }

  async function loadSaveList() {
    const result = await api.get("/")

    setList(result.data.list)
  }

  async function toggleCheckBoxCompleted(taskId, isCompleted) {
    const result = await api.put("/" + taskId, {
      is_completed: isCompleted
    })

    if (result.status == 200) {
      const newTasks = list.map(task => {

        if (task.id == taskId) {
          return {
            ...task,
            is_completed: isCompleted,
          }
        }
        return task;
      })
      setList(newTasks);
    }

  }

  useEffect(() => {
    loadSaveList();
  }, [])

  return (
    <View style={styles.container}>
      <Header onAddNewTask={onAddNewTask} />
      <List
        list={list}
        onPressTrash={onRemoveTask}
        onComplete={toggleCheckBoxCompleted}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
