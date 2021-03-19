import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import {createTask} from '../TaskSlice';
import {useDispatch} from 'react-redux';


type Inputs = {
  taskTitle: string;
};

const TaskForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    // dataはregisterで登録したdataが入ってくる
    // dispatchすることでcreateTaskが発火する。引数にTextFieldで入力した値のnameを渡す
    // data.taskTitleをaction.payloadに渡すことができる
    dispatch(createTask(data.taskTitle))
    reset();
  };
  return (
    <div className={styles.root}>
        {/* handlesubmitはsubmitされた時に実行される関数 */}
      <form onSubmit={handleSubmit(handleCreate)} className={styles.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="NewTask"
          variant="outlined"
          className={styles.text_field}
        //   どこからデータを取得するのか→今回はfrom からデータを取得する
          inputRef={register}
        //   どういったdataの名前で渡すかを記述する
          name='taskTitle'
        />
      </form>
    </div>
  );
};

export default TaskForm;
