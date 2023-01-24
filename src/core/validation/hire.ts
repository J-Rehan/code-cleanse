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
    productCategory: Yup.array()
      .of(
        Yup.mixed().oneOf(
          ['Android App', 'iOS App', 'Web Application', 'Other'],
          'Invalid product category',
        ),
      )
      .min(1, 'Please select a product category!')
      .required('Please select a product category!'),
    description: Yup.string()
      .min(2, 'Too short description')
      .max(5000, 'Too long description')
      .required('Project description is required!'),
    plan: Yup.mixed()
      .oneOf(['Monthly', 'Yearly'])
      .required('Please select a plan!'),
    // cardNumber: Yup.string()
    //   .length(19, 'Invalid card number')
    //   .required('Card number is required!'),
    // expirationDate: Yup.string()
    //   .length(5, 'Invalid expiration date')
    //   .required('Expiration date is required!'),
    // cvc: Yup.string().length(3, 'Invalid CVC').required('CVC is required!'),
  })
  .required('All the fields are required')

export const developerValidationSchema = Yup.object()
  .shape({
    fullName: Yup.string()
      .min(2, 'Too short name!')
      .max(100, 'Too Long Name!')
      .matches(/^[A-Za-z ]*$/, 'Please enter valid name!')
      .required("Developer's full name is required!"),
    phone: Yup.string()
      .min(5, 'Too short phone')
      .max(20, 'Too long phone')
      .required("Developer's phone number is required!"),
    skype: Yup.string()
      .min(1, 'Too short name')
      .max(100, 'Too Long Name')
      .required("Developer's skype is required!"),
  })
  .required('All the fields are required')
