import React, {useEffect} from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadMyInfo} from '../actions/user'

import AppLayout from '../components/AppLayout'
import StudyList from '../components/StudyList'


export default function Home() {
    const dispatch = useDispatch()
    const {me} =  useSelector((state) => state.user)

    const onClickBtn = () => {
        dispatch(loadMyInfo())
    }

    return (
        <>
            <AppLayout>
                <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '45px',
                fontFamily: "'Roboto Mono', monospace;", "marginTop": "40px"
            }}>
                    STUDY LIST
                </div>
                <StudyList />
            </AppLayout>
        </>
    )
}


// SSR
// export const getServerSideProps = wrapper