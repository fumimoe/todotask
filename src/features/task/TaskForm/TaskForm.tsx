import React from "react";
import styles from "./TaskForm.module.scss";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { createTask } from "../TaskSlice";
import { useDispatch } from "react-redux";

type Inputs = {
  taskTitle: string;
};

type PropTypes = {
  // ?とすることで必ずしも渡されなくてもいいよを宣言する
  edit?: boolean;
};

const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const handleCreate = (data: Inputs) => {
    // dataはregisterで登録したdataが入ってくる
    // dispatchすることでcreateTaskが発火する。引数にTextFieldで入力した値のnameを渡す
    // data.taskTitleをaction.payloadに渡すことができる
    dispatch(createTask(data.taskTitle));
    reset();
  };

  const handleEdit = (data:Inputs) => {
    console.log(data);
  }
  return (
    <div className={styles.root}>
      {/* handlesubmitはsubmitされた時に実行される関数 */}
      <form
      
        onSubmit={edit ?handleSubmit(handleEdit): handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
        // 編集ボタンを押した時にtitleの名前が表示される
        defaultValue={edit? 'defaultValue' : ""}
          id="outlined-basic"
          // ここで条件分岐を行ってる
          label={edit ? "edit task" : "new task"}
          variant="outlined"
          className={styles.text_field}
          //   どこからデータを取得するのか→今回はfrom からデータを取得する
          inputRef={register}
          //   どういったdataの名前で渡すかを記述する
          name="taskTitle"
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button} >変更</button>
            <button type="button" className={styles.cancel_button}>キャンセル</button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default TaskForm;
