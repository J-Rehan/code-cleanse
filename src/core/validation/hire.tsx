import * as Yup from 'yup'
import 'yup-phone'

export const hireValidationSchema = Yup.object()
  .shape({
    fullName: Yup.string()
      .min(2, 'Too short name!')
      .max(100, 'Too Long Name!')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name!')
      .required('Your full name is required!'),
    email: Yup.string()
      .email('Invalid email')
      .required('Your email is required!'),
    phone: Yup.string()
      .min(5, 'Too short phone')
      .max(20, 'Too long phone')
      .required('Your phone number is required!'),
  })
  .required('All the fields are required')
