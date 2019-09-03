import React, { Fragment } from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'

const ErrorMessage = ({ message }) => {
  return (
    <Message negative>
      <Message.Header>Something went wrong</Message.Header>
      <p>{message.replace('GraphQL error: ', '')}</p>
    </Message>
  )
}

const Error = ({ error }) => {
  if (!error || !error.message) return null
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <Fragment key={i}>
        <ErrorMessage message={error.message} />
      </Fragment>
    ))
  }
  return <ErrorMessage message={error.message} />
}

Error.defaultProps = {
  error: {},
}

Error.propTypes = {
  error: PropTypes.object,
}

export default Error

// import React, { Fragment } from 'react'
// import { Message } from 'semantic-ui-react'
// import PropTypes from 'prop-types'
//
// interface NetworkErrorResult {
//   errors: Array<String>
// }
//
// interface NetworkError {
//   result: NetworkErrorResult
// }
//
// interface GraphQLError {
//   message: String
//   networkError: NetworkError
// }
//
// interface Props {
//   error: GraphQLError
// }
//
// const ErrorMessage = (error: GraphQLError) => {
//   return (
//     <Message negative>
//       <Message.Header>Something went wrong</Message.Header>
//       <p>{error.message.replace('GraphQL error: ', '')}</p>
//     </Message>
//   )
// }
//
// const Error = (props: Props) => {
//   const { error } = props
//
//   if (!error || !error.message) return null
//   if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
//     return error.networkError.result.errors.map((error, i) => (
//       <Fragment key={i}>
//         <ErrorMessage message={error.message} />
//       </Fragment>
//     ))
//   }
//   return <ErrorMessage message={error.message} />
// }
//
// Error.defaultProps = {
//   error: {},
// }
//
// Error.propTypes = {
//   error: PropTypes.object,
// }
//
// export default Error
//
