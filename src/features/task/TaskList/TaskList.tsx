import React from "react";
import styles from "./TaskList.module.scss";
import TaskItem from "../TaskItem/TaskItem";
import {useSelector} from 'react-redux';
import {selectTasks} from '../TaskSlice';

const TaskList = () => {
  // tasksの中に[{id:1,title:'Task1',completed:false}]がはいってる
  const tasks = useSelector(selectTasks)
  return (
    <div className={styles.root}>
       {/* ここでtasksの取得をしてる */}
      {tasks.map((task) => 
        <TaskItem key={task.id} task={task} />
      )}
    </div>
  );
};

export default TaskList;
