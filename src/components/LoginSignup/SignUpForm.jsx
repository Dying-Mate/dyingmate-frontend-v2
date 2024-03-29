import React, { useState,  } from 'react'
import {useNavigate} from 'react-router-dom'
import {useForm, Controller, useWatch} from 'react-hook-form'
import styled from 'styled-components';
import { HidePwdIcon } from 'assets/icons';
import {GoCheckCircleFill} from 'react-icons/go'
import {IoMdAlert} from 'react-icons/io'
import SocialLogin from './SocialLogin';
import userApi from 'api/auth/user'
import { FORM_RESPONSES } from 'constants/formMessages';
import Button from 'components/common/Button/Button';

export default function SignUpForm() {
  const navigate = useNavigate()
  const {control, handleSubmit} = useForm()
  const [showPwd, setShowPwd] = useState([])
  const [emailCheckText, setEmailCheckText ] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)

  const onSubmit = (data) => {
    const {email, pwd} = data
    if(emailCheckText && isEmailValid && checkPwd){
      userApi.userJoin(email, pwd).then(() => {
        navigate('/onboarding',{state: {isSocialLogin: false, email: email, pwd: pwd}})
      })
    }else return
  }

  const handleCheckEmail = async (email) => {
    if(email) {
      userApi.checkEmail(email).then((res) => {
        setEmailCheckText(true)
        setIsEmailValid(!res)
      })
    }
  }

  const checkPwd = useWatch({
    name: 'pwd',
    control
   }) === useWatch({
    name: 'pwd_check',
    control
   })

  const handlePwdHide = (idx) => {
    showPwd[idx] = !showPwd[idx]
    setShowPwd([...showPwd])
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <EmailInputWrapper>
        <Controller
          control={control}
          name="email"
          render={({field}) => (
            <>
              <FormInput
                value={field.value}
                onChange={e=> field.onChange(e.target.value)}
                required
                placeholder='아이디를 입력해주세요'
              />
              <EmailCheckBtn 
                variant={field.value ? 'primary' : 'empty'} 
                disabled={!field.value} 
                onClick={() => handleCheckEmail(field.value)}
              >
                중복확인
              </EmailCheckBtn>
            </>            
          )}
        />
      </EmailInputWrapper>
      <ValidText isShow={emailCheckText}>
        {isEmailValid ?
          <>
            <GoCheckCircleFill />
            <p>{FORM_RESPONSES.AVAILABLE_ID}</p>
          </>
          :
          <>
            <IoMdAlert />
            <p>{FORM_RESPONSES.UNAVAILABLE_ID}</p>
          </>
        }
      </ValidText>
      <PasswordInputWrapper>
        <Controller
          control={control}
          name="pwd"
          render={({field}) => (
            <>
              <FormInput 
                type={showPwd[0] ? "text" : "password"}
                value={field.value}
                onChange={e=> field.onChange(e.target.value)}
                placeholder='비밀번호를 입력해주세요'
                required
              />
              <HidePwdIcon onClick={() => handlePwdHide(0)}/>
            </>
          )}
        />
      </PasswordInputWrapper>
      <Controller
        control={control}
        name="pwd_check"
        render={({field}) => (
          <>
            <PasswordInputWrapper>
            <FormInput 
                type={showPwd[1] ? "text" : "password"}
                value={field.value}
                onChange={e=> field.onChange(e.target.value)}
                placeholder='비밀번호를 재입력해주세요'
                required
              />
              <HidePwdIcon onClick={() => handlePwdHide(1)}/>
            </PasswordInputWrapper>
              <ValidText>
                {field.value && checkPwd ? 
                  <>
                    <GoCheckCircleFill />
                    <p>{FORM_RESPONSES.PWD_CHECK_SUCCESS}</p>
                  </>  
                  :
                  <>
                    <IoMdAlert/>
                    <p>{FORM_RESPONSES.PWD_CHECK_FAIL}</p>
                  </>
                }
              </ValidText>
          </>
        )}
      />
      <SignUpButton type={'submit'}>회원가입</SignUpButton>
    </form>
    <SocialLogin />
    </>
  )
}

// styled-components
const PasswordInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  verticle-align: middle;
  margin-bottom: 1rem;
  cursor: pointer;

  svg {
    width: 1rem;
    position: absolute;
    right: 1rem;
  }
`

const EmailInputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 3rem;
  margin-bottom: 1rem;
`

const EmailCheckBtn = styled(Button)`
  width: 7rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 1rem;
  flex-shrink: 0;
`

const ValidText = styled.div` 
  display: ${props => props.isShow ? 'flex' : 'none'};
  gap: 0.5rem;
  margin: -0.5rem 0 0.5rem 0;
  color: var(--main-color);
  align-items: center;

  svg {
    font-size: 1.25rem;
  }
`

const FormInput = styled.input`
  border-radius: 1.25rem;
  width: 100%;
  height: 3rem;
  color: var(--font-gray-3);
  background-color: #F3F3F3;
  padding: 0 1.25rem;

  &:focus {
    outline: 1.5px solid black;
  }
  &::placeholder {
    color: var(--font-gray-1);
  }
`
const SignUpButton = styled(Button)`
  width: 100%;
  height: 3rem;
  margin-top: 2rem;
  padding: 12px 0;
  border-radius: 20px;
`