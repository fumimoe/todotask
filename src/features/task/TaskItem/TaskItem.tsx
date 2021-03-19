import React from "react";
import styles from "./TaskItem.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Modal from "@material-ui/core/Modal";
import TaskForm from "../TaskForm/TaskForm";


interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
  const [open, setOpen] = React.useState(false);

  // モーダルの開閉関数
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>
          {/* propsで受け取る */}
          {task.title}
        </div>
      </div>

      <div className={styles.right_item}>
        <IconButton>
          <Checkbox
            checked={task.completed}
            onClick={() => console.log("checkbox")}
            className={styles.icon}
          />
        </IconButton>
        <IconButton
          className={styles.edit_button}
          onClick={handleOpen}
        >
          <EditIcon className={styles.icon} />
        </IconButton>
        <IconButton
          onClick={() => console.log("delete")}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </IconButton>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className={styles.modal}
      >
        <div className={styles.modal_content}>
          <div className="styles.modal_start">
            edit task
            {/* 条件分岐を行うためにTaskFormにeditを送ってる */}
            <TaskForm edit/>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskItem;
