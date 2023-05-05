import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../store/root/authActions'
import * as jobsAction from '../store/jobs/jobsAction'
import { actions } from '../store/jobs/jobsSlice'

const allActions = {
  ...authActions,
  ...jobsAction,
  ...actions
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch])
}
