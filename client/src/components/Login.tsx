import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import gql from 'graphql-tag'

// import { CURRENT_USER } from 'graphql/queries'

import Error from './Error'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
})

const Feed = () => {
  const [login, { error: graphqlError }] = useMutation(LOGIN, {
    // refetchQueries: [{ query: CURRENT_USER }],
    awaitRefetchQueries: true,
  })

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={async ({ email, password }, { setSubmitting }) => {
        try {
          await login({ variables: { email, password } })
        } catch (error) {
          console.error(error)
        }

        setSubmitting(false)
      }}
    >
      {({ isSubmitting, errors: validationErrors, touched }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="Email" />

          <ErrorMessage name="email" component="p" />

          <label htmlFor="password">Password</label>
          <Field type="password" name="password" placeholder="**********" />

          <ErrorMessage name="password" component="p" />

          <button type="submit" disabled={isSubmitting}>
          Sign In
          </button>
          <Error error={graphqlError} />
        </Form>
      )}
    </Formik>
  )
}

export default Feed
