import { Form, FormikProvider, useFormik } from 'formik'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Header from '../components/shared/Header/Header'
import FormikTextInput from '../components/shared/Formik/FormikTextInput/FormikTextInput'
import { cn } from '../utils/style'
import Button from '../components/shared/Button/Button'
import { developerValidationSchema } from '../core/validation/hire'
import Head from 'next/head'

const initialValues = {
  fullName: '',
  phone: '',
  skype: '',
}

const DeveloperDetailPage: NextPage = () => {
  const [contentHeight, setContentHeight] = useState(60)
  const [haveDeveloper, setHaveDeveloper] = useState<'YES' | 'NO' | null>(null)
  const [agreed, setAgreed] = useState(false)
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: developerValidationSchema,
    onSubmit(values) {
      console.log(values)
    },
  })

  useEffect(() => {
    // let timeout = setTimeout(() => {
    //   setContentHeight(60)
    // }, 3000)
    // return () => {
    //   clearTimeout(timeout)
    // }
  }, [])

  const disabled = Object.values(formik.errors).length > 0 || !agreed

  return (
    <FormikProvider value={formik}>
      <Head>
        <title>Developer Detail</title>
      </Head>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <Header>
            <div className="">
              <div
                className={cn(
                  'text-white flex items-center p-6',
                  haveDeveloper === 'YES'
                    ? 'flex-row items-center'
                    : 'flex-col',
                )}
              >
                <Image
                  src="/check_circle.png"
                  height={56}
                  width={56}
                  alt="check"
                />
                <h2
                  className={cn(
                    'font-normal',
                    haveDeveloper === 'YES'
                      ? 'text-base text-left ml-4'
                      : 'text-2xl text-center mt-2',
                  )}
                >
                  Your code is safe with us. We&lsquo;ll get in touch right
                  away.
                </h2>
                <Link
                  href="/contact"
                  className={cn(
                    'mt-6 uppercase text-xs font-bold',
                    haveDeveloper === 'YES' && 'hidden',
                  )}
                >
                  <p>view contact details</p>
                </Link>
              </div>
              <div
                className={`h-[${contentHeight}vh] transition-all duration-300 ease-in-out bg-white py-8 px-6`}
              >
                <h4 className="text-dark font-medium">
                  Tell us more about your current team
                </h4>

                <div className="mt-8">
                  <label className="text-sm font-normal">
                    Do you have a developer?
                  </label>

                  <div className="flex space-x-4 mt-2">
                    <button
                      type="button"
                      onClick={() => setHaveDeveloper('YES')}
                      className={cn(
                        'w-full py-[14px] border rounded-lg',
                        haveDeveloper === 'YES'
                          ? 'border-blue'
                          : 'border-[#D1CDCD]',
                      )}
                    >
                      Yes
                    </button>

                    <button
                      type="button"
                      onClick={() => setHaveDeveloper('NO')}
                      className={cn(
                        'w-full py-[14px] border rounded-lg',
                        haveDeveloper === 'NO'
                          ? 'border-blue'
                          : 'border-[#D1CDCD]',
                      )}
                    >
                      No
                    </button>
                  </div>

                  {/* {haveDeveloper === 'YES' && ( */}
                  <div
                    className={cn(
                      'mt-8',
                      haveDeveloper === 'YES' ? '' : 'hidden',
                    )}
                  >
                    <FormikTextInput
                      name="fullName"
                      label="Developer's name"
                      placeholder="Enter developer's name"
                    />

                    <FormikTextInput
                      name="phone"
                      className="mt-6"
                      label="Developer's phone"
                      placeholder="Enter developer's phone"
                    />

                    <FormikTextInput
                      name="skype"
                      className="mt-6"
                      label="Developer's Skype"
                      placeholder="Enter developer's skype"
                    />

                    <div className="mt-8 flex">
                      <input
                        id="authorize"
                        type="checkbox"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                      />
                      <label className="ml-3 leading-5" htmlFor="authorize">
                        I authorize Code Cleanse to contact my current developer
                      </label>
                    </div>

                    <Button disabled={disabled} type="submit" className="mt-8">
                      <strong>Send</strong>
                    </Button>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </Header>
        </div>
      </Form>
    </FormikProvider>
  )
}

export default DeveloperDetailPage
