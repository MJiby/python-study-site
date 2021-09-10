import { message, Button } from 'antd'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Router from 'next/router'
import Head from 'next/head'
import * as Yup from 'yup';
import { Formik } from 'formik'
import { Checkbox, Form, Input } from 'formik-antd';
import styled from 'styled-components';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

import AppLayout from '../components/AppLayout'
import { loadMyInfo } from '../actions/user'


const SignupSchema = Yup.object().shape({
    user_email: Yup.string()
      .email('올바르지 않은 이메일 형식 입니다.')
      .required('이메일은 필수 입력 항목 입니다.'),
    user_nickname: Yup.string()
      .required('닉네임은 필수 입력 항목 입니다.'),
    user_password: Yup.string()
      .required('비밀번호는 필수 입력 항목 입니다.'),
    user_password_check: Yup.string()
      .oneOf([Yup.ref('user_password')], '비밀번호가 일치 하지 않습니다.')
      .required('비밀번호 체크는 필수 입력 항목 입니다.'),
    user_term: Yup.bool()
      .oneOf([true], '약관에 동의하여 주십시오'),
  });

const FormWrapper = styled(Form)`
  margin-bottom: 20px;
  border: 1px solid #d9d9d9;
  padding: 20px;
  box-sizing: border-box;
`;


const Signup = () => {
    const [signupAction, setSignupAction] = useState(null)
    const dispatch = useDispatch()
    const {me} = useSelector((state) => state.user)

    useEffect(() => {
        if(me) {
            message.warn('이미 로그인 상태입니다.').then()
            Router.push('/').then();
        }
    }, [me])

    useEffect(() => {
        if(signupAction) {
            message
        }
    }, [])

    return (
        <AppLayout>
            <Head>
                <title>회원가입</title>
            </Head>
            <Formik
                // 1
                initialValues={{
                    user_email: '',
                    user_nickname: '',
                    user_password: '',
                    user_password_check: '',
                    user_term: false,
                  }}
                // 2
                validationSchema={SignupSchema}
                // 3
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    dispatch(loadMyInfo());
                    setAction({ setSubmitting, resetForm });
                  }}>
                <FormWrapper layout="vertical">
          <Form.Item
            name="user_email"
            label="이메일"
          >
            <Input
              name="user_email"
              type="email"
              placeholder="User Email"
              prefix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="user_nickname"
            label="닉네임"
          >
            <Input
              name="user_nickname"
              placeholder="Nickname"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="user_password"
            label="비밀번호"
          >
            <Input.Password
              name="user_password"
              placeholder="Password"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="user_password_check"
            label="비밀번호체크"
          >
            <Input.Password
              name="user_password_check"
              placeholder="Password Check"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item name="user_term">
            <Checkbox
              name="user_term"
              placeholder="user_term Check"
            >
              동의 하시겠습니까?
            </Checkbox>
          </Form.Item>
          <Form.Item name="submit">
            <Button
              type="primary"
              htmlType="submit"
            //   loading={signupLoading}
            >
              가입하기
            </Button>
          </Form.Item>
        </FormWrapper>
            </Formik>
        </AppLayout>
    )
}

export default Signup