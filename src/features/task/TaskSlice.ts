import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';


interface TaskState {
    // taskがなんこあるか
  idCount:number;
//   配列の中に入ってる→型定義。storeに保存するtask一覧
  tasks:{id:number,title:string,completed:boolean}[]
//   taskを選択した時
  selectedTask:{id:number,title:string,completed:boolean}
//   モーダル を開くかどうか
  isModalOpen:boolean
}

const initialState: TaskState = {
    idCount:1,
    tasks:[{id:1,title:'Task1',completed:false}],
    selectedTask:{id:0,title:'',completed:false},
    isModalOpen:false
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // taskの作成
    // あくまでreducerなのでstateとactionを持つことができる
    createTask:(state,action) => {
        state.idCount ++;
        const newTask = {
            id:state.idCount,
            title:action.payload,
            completed:false
        };
        // 新しいtasksを生成する
        state.tasks=[newTask,...state.tasks]
    }
  },
});

// これを宣言することでactionファイルは不要になる→type:task.createTaskになる
export const { createTask} = taskSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

// [{id:1,title:'Task1',completed:false}],←これをselectTaskが持つことができる
// state.task.tasksのtaskはRootStateで型定義する必要がある
// TaskState['tasks']と書く理由は→配列なので[]の中にtasksを記載した
export const selectTask = (state: RootState): TaskState['tasks']=> state.task.tasks;

//  reducer以下をstore.tsに渡す
export default taskSlice.reducer;
