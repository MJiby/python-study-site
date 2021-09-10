import React, {useEffect} from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import {loadMyInfo} from '../actions/user'
import { Row, Col } from 'antd';

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
                <Row>
                    <Col xs={24}>
                        <div style={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '55px',
                        fontFamily: "'Jua', sans-serif;", "marginTop": "40px"
                    }}>
                            STUDY LIST
                        </div>
                    </Col>
                </Row>
                <StudyList />
            </AppLayout>
        </>
    )
}


// SSR
// export const getServerSideProps = wrapper