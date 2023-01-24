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
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const initialValues = {
  fullName: '',
  phone: '',
  skype: '',
}

const DeveloperDetailPage: NextPage = () => {
  const router = useRouter()
  const [finalY, setFinalY] = useState(500)
  const [haveDeveloper, setHaveDeveloper] = useState<'YES' | 'NO' | null>(null)
  const [agreed, setAgreed] = useState(false)
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema: developerValidationSchema,
    onSubmit(values) {
      router.push('/hire-success')
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setFinalY(0)
    }, 1000)
  }, [finalY])

  const disabled = Object.values(formik.errors).length > 0 || !agreed

  return (
    <FormikProvider value={formik}>
      <Head>
        <title>Developer Detail</title>
      </Head>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div>
          <Header>
            <div className="flex-1 flex flex-col justify-between">
              <div
                className={cn(
                  'text-white flex items-center p-6 md:max-w-[360px] mx-auto',
                  haveDeveloper === 'YES'
                    ? 'flex-row items-center'
                    : 'flex-col justify-center flex-1',
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
              <motion.div
                className={cn(
                  'bg-white md:bg-[#F8F8F8]',
                  haveDeveloper === 'YES' && 'flex-1',
                )}
                initial={{ y: 500 }}
                animate={{ y: finalY }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white py-8 px-6 md:max-w-[448px] md:mx-auto md:mt-10 md:rounded-2xl md:border md:border-[#DDDDDD]">
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
                          I authorize Code Cleanse to contact my current
                          developer
                        </label>
                      </div>

                      <Button
                        disabled={disabled}
                        type="submit"
                        className="mt-8"
                      >
                        <strong>Send</strong>
                      </Button>
                    </div>
                    {/* )} */}
                  </div>
                </div>
              </motion.div>
            </div>
          </Header>
        </div>
      </Form>
    </FormikProvider>
  )
}

export default DeveloperDetailPage
