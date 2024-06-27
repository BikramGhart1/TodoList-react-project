import { useEffect, useState } from 'react'
import './App.css'
import AddElement from './components/AddElement'
import Intro from './components/Intro'
import TaskManager from './components/TaskManager'
import Sidebar from './components/Sidebar'
import EditForm from './components/EditForm'
import SidebarForSmallWindow from './components/SidebarForSmallWindow'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  })
  const [toEditTask, setToEditTask] = useState(null);
  const [hamStatus, setHamStatus] = useState(false);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    if (tasks.length > 0) {
      try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.error('Error saving tasks to local storage:', error);
      }
    }

  }, [tasks]);
  console.log('Ham menu clicked: ', hamStatus);

  const onHamMenu = () => {
    setHamStatus(!hamStatus);

  }
  const onCloseHamMenu = () => {
    setHamStatus(false);
  }
  const getValueFromAdd = (valFromAdd) => {
    setTasks([...tasks, valFromAdd]);
  }

  const getRemoveId = (idFromRemove) => {
    const filteredTask = tasks.filter((task) => task.id != idFromRemove);
    setTasks(filteredTask);
  }

  const getStatusId = (idFromStatus) => {
    const newArray = tasks.map(task => (task.id === idFromStatus) ? { ...task, statusM: !task.statusM } : task);
    setTasks(newArray);
  }

  const getEditId = (idFromEdit) => {
    const editTask = tasks.find(task => task.id === idFromEdit);
    setToEditTask(editTask);
  }

  const onUpdate = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setToEditTask(null);
  }
  return (
    <>
      <Intro onHamMenu={onHamMenu} />
      {(tasks.length > 0) ?
        (<TaskManager tasks={tasks} getRemoveId={getRemoveId} getStatusId={getStatusId} getEditId={getEditId} />)
        :
        (<h2 className='empty-render'>Your list is Empty</h2>)}
      {toEditTask && <EditForm toEditTask={toEditTask} onUpdate={onUpdate} />}
      <AddElement getValueFromAdd={getValueFromAdd} />
      <Sidebar />
      <SidebarForSmallWindow hamStatus={hamStatus} onCloseHamMenu={onCloseHamMenu} />
    </>
  )
}

export default App
