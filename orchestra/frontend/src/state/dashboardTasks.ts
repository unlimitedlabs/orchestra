import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AppThunk } from './store'

interface NextTodo {
  description: string,
  start_by_datetime: string,
  due_datetime: string
}

interface Task {
  step: string,
  next_todo_dict: NextTodo,
  tags: string[]
  project: string,
  priority: number,
  assignment_start_datetime: string,
  should_be_active: boolean,
  detail: string,
  assignment_id: number,
  id: number,
  state: string
}

interface DashboardTasksState {
  reviewerStatus: boolean,
  preventNew: boolean,
  tasks: Task[],
}

const initialState: DashboardTasksState = {
  tasks: [],
  preventNew: true,
  reviewerStatus: false
}

const dashboardTasks = createSlice({
  name: 'dashboardTasks',
  initialState,
  reducers: {
    getTodosStart(state) {
      // state.loading = true
      // state.error = null
    },
    getTodosSuccess(state, action: PayloadAction<DashboardTasksState>) {
      console.log('getTodosSuccess')
      console.log(action)
      console.log(action.payload)
      state.tasks = action.payload.tasks
      state.preventNew = action.payload.preventNew
      state.reviewerStatus = action.payload.reviewerStatus
      // state.loading = false
    },
    getTodosFailure(state, action: PayloadAction<string>) {
      // state.loading = false
      // state.error = action.payload
    }
  }
})

export default dashboardTasks

export const fetchDashboardTasks = (): AppThunk => async dispatch => {
  try {
    dispatch(dashboardTasks.actions.getTodosStart())
    const response = await axios.get('/orchestra/api/interface/dashboard_tasks/')
    const data: DashboardTasksState = response.data
    console.log('response', response)
    dispatch(dashboardTasks.actions.getTodosSuccess(data))
  } catch (err) {
    dispatch(dashboardTasks.actions.getTodosFailure(err))
  }
}
