import { SignInForm } from '@/components/forms/signin-form'
import React from 'react'

type Props = {}

const Auth = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-2xl font-bold">Welcome back</h1>
      <SignInForm/>
    </div>
  )
}

export default Auth