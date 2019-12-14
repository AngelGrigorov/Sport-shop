import actionTypes from './actionTypes'
import {beginAjax, endAjax} from './ajaxStatusActions'
import {fetchStats} from '../api/remote'

function fetchStatsSuccess (data) {
  return {
    type: actionTypes.FETCH_STATS_SUCCESS,
    data
  }
}

function fetchStatsAction () {
  return async (dispatch) => {
    dispatch(beginAjax());
    const data = await fetchStats();
    dispatch(fetchStatsSuccess(data));
    dispatch(endAjax())
  }
}

export default fetchStatsAction
