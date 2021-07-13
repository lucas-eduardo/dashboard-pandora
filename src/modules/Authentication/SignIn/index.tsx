import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@components/Button'
import { Textfield } from '@components/Textfield'
import { useAuth } from '@hooks/useAuth'

import { Container, Form, WrapperFields, WrapperHeader } from './styles'

type FormData = {
  email: string
  password: string
}

const SignIn = () => {
  const { signIn } = useAuth()
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: FormData) => {
    signIn(data)

    toast.success('Successfully logged in')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <WrapperHeader>
          <span>Sign in</span>
        </WrapperHeader>

        <WrapperFields>
          <Textfield
            {...register('email')}
            type="email"
            id="email"
            label="E-mail"
            placeholder="name@address.com"
          />

          <Textfield
            {...register('password')}
            type="password"
            id="password"
            label="Password"
            placeholder="Enter your password"
          />

          <Button>Sign in</Button>
        </WrapperFields>
      </Form>
    </Container>
  )
}

export { SignIn }
