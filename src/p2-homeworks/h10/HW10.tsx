import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import loaderpic from './../h10/bll/1474.gif'

function HW10() {
    let loading = useSelector<AppStoreType>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    // useSelector, useDispatch

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
            console.log('loading...complete')
        }, 3000)
        // dispatch
        // setTimeout
        console.log('loading...')
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={loaderpic} /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr />
        </div>
    )
}

export default HW10
