import React from "react";
import styles from "./TaskItem.module.scss";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const TaskItem: React.FC<PropTypes> = ({ task }) => {
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
          <Checkbox
            checked={task.completed}
            onClick={() => console.log("checkbox")}
            className={styles.checkbox}
          />
          <IconButton
            onClick={() => console.log("edit")}
            className={styles.edit_button}
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
      
    </div>
  );
};

export default TaskItem;
