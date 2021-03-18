import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";


type Inputs = {
  textTitle: string;
};

const TaskForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    // dataはregisterで登録したdataが入ってくる
    console.log(data);
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
