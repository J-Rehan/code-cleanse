import { doc, updateDoc } from 'firebase/firestore'
import { useFormikContext } from 'formik'
import Select from 'react-select'
import { userCollection } from '../../../core/config/app'
import { firestore } from '../../../core/lib/firebase'
import useSteps from '../../../hooks/useSteps'
import Button from '../../shared/Button/Button'
import FormikCheckboxGroup, {
  CheckBoxItem,
} from '../../shared/Formik/FormikCheckboxGroup/FormikCheckboxGroup'
import FormikTextArea from '../../shared/Formik/FormikTextArea/FormikTextArea'
import FormikTextInput from '../../shared/Formik/FormikTextInput/FormikTextInput'

const helpOptions = [
  {
    label: "Verify that the developer's work is consistent with billing",
    value:
      "Verify that the developer's work is consistent with billing(on-going)",
  },
  {
    value: 'Guide and oversee development team(on-going)',
    label: 'Guide and oversee development team',
  },
  {
    value: 'Ensure development direction(on-going)',
    label: 'Ensure development direction',
  },
  {
    value: 'Having app issues(code-review)',
    label: 'Having app issues',
  },
  {
    value: 'Evaluate code quality(code-review)',
    label: 'Evaluate code quality',
  },
]

const projectTypeOptions = [
  { value: 'manage-dev-team', label: 'I need to manage my development team' },
  { value: 'need-code-review', label: 'I need to perform code review' },
  {
    value: 'performance-improvement',
    label: 'I need to improve the performance my existing application',
  },
]

const productCategoryOpts: CheckBoxItem[] = [
  {
    label: 'iOS App',
    value: 'iOS App',
  },
  {
    label: 'Android App',
    value: 'Android App',
  },
  {
    label: 'Web Application',
    value: 'Web Application',
  },
  {
    label: 'Others',
    value: 'Others',
  },
]

const devRoleOptions = [
  {
    label: 'Lead Developer',
    value: 'Lead Developer',
  },
  {
    label: 'Full Stack Developer',
    value: 'Full Stack Developer',
  },
  {
    label: 'Back End Engineer',
    value: 'Back End Engineer',
  },
]

const YourProject: React.FC = () => {
  const formik = useFormikContext<any>()
  const { state, dispatch } = useSteps()
  const step = state.steps.find((step) => step.name === 'Your project')
  const disabled = !!Object.keys(formik.errors).find((key) =>
    step?.fields.includes(key),
  )
  const { values } = formik

  const nextStep = async () => {
    updateDoc(doc(firestore, userCollection, state.firebaseDocId), {
      projectName: values.projectName,
      helpMethods: values.helpMethod,
      productCategory: values.productCategory.split(','),
      description: values.description,
      developers: values.developers,
    })
    dispatch({ type: 'NEXT_STEP' })
  }

  return (
    <div className="md:relative md:w-[520px] md:mx-auto md:bg-white md:mt-8 md:rounded-2xl md:border md:border-[#DDDDDD]">
      <div>
        <div className="py-8 px-6 flex flex-col h-full">
          <h2 className="text-dark text-2xl font-normal mb-8 text-center">
            Your Project
          </h2>

          <div className="hidden rounded-lg" />

          <div className="flex items-center p-4 space-x-4 bg-[#EBF9FF] border rounded-md border-[#009BE0] mb-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_420_6809"
                // style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_420_6809)">
                <path
                  d="M12 16.875C12.95 16.875 13.8293 16.6123 14.638 16.087C15.446 15.5623 16.05 14.8667 16.45 14H7.55C7.95 14.8667 8.55433 15.5623 9.363 16.087C10.171 16.6123 11.05 16.875 12 16.875ZM7.8 10.575L8.9 9.5L10 10.575L10.625 9.95L8.9 8.225L7.175 9.95L7.8 10.575ZM14 10.575L15.1 9.5L16.2 10.575L16.825 9.95L15.1 8.225L13.375 9.95L14 10.575ZM12 21C10.75 21 9.57933 20.7627 8.488 20.288C7.396 19.8127 6.446 19.1707 5.638 18.362C4.82933 17.554 4.18733 16.604 3.712 15.512C3.23733 14.4207 3 13.25 3 12C3 10.75 3.23733 9.579 3.712 8.487C4.18733 7.39567 4.82933 6.44567 5.638 5.637C6.446 4.829 7.396 4.18733 8.488 3.712C9.57933 3.23733 10.75 3 12 3C13.25 3 14.421 3.23733 15.513 3.712C16.6043 4.18733 17.5543 4.829 18.363 5.637C19.171 6.44567 19.8127 7.39567 20.288 8.487C20.7627 9.579 21 10.75 21 12C21 13.25 20.7627 14.4207 20.288 15.512C19.8127 16.604 19.171 17.554 18.363 18.362C17.5543 19.1707 16.6043 19.8127 15.513 20.288C14.421 20.7627 13.25 21 12 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                  fill="#009BE0"
                />
              </g>
            </svg>

            <p className="text-base">
              Don&lsquo;t worry if you don&lsquo;t have all of this information
              yet. Fill as much as you can.
            </p>
          </div>

          <div className="mb-auto ">
            <FormikTextInput
              required
              autoFocus
              type="text"
              label="Project name"
              name="projectName"
              placeholder="Type project name"
            />

            <div className="mt-6">
              <label htmlFor="" className="mb-1 text-sm font-normal">
                How can we help you? (Select all that applies)
              </label>
              <FormikCheckboxGroup items={helpOptions} name="helpMethod" />
              {formik.errors.helpMethod && formik.touched.helpMethod && (
                <p className="text-red-500 text-sm font-normal mt-1">
                  {formik.errors.helpMethod as any}
                </p>
              )}
            </div>

            <div className="mt-6 react-select-reset">
              <label htmlFor="" className="mb-1 text-sm font-normal">
                What are you building?
              </label>
              <Select
                isMulti
                className="rc-select-reset"
                classNames={{ control: () => 'p-2' }}
                styles={{ control: (base) => ({ ...base, borderRadius: 8 }) }}
                value={productCategoryOpts.filter((option) =>
                  formik.values.productCategory
                    .split(',')
                    .includes(option.value),
                )}
                options={productCategoryOpts}
                onChange={(value) => {
                  formik.setFieldValue(
                    'productCategory',
                    value.map((val) => val.value).join(','),
                  )
                }}
              />
              {formik.errors.productCategory &&
                formik.touched.productCategory && (
                  <p className="text-red-500 text-sm font-normal mt-1">
                    {formik.errors.productCategory as any}
                  </p>
                )}
            </div>

            <FormikTextArea
              name="description"
              className="mt-6"
              rows={10}
              label="Brief description of the project & concerns"
              placeholder="Describe the project"
            />

            <p className="mt-8 font-bold">Developer information (Optional)</p>
          </div>
        </div>

        {formik.values.developers.map((developer: any, index: any) => {
          return (
            <div
              key={`developers-${index}`}
              className="border-b border-[#DDDDDD] px-6 pb-6"
            >
              <FormikTextInput
                type="text"
                label="Developer's name"
                name={`developers.${index}.name`}
                placeholder="Enter developer's name"
              />

              <FormikTextInput
                type="email"
                label="Developer's email"
                name={`developers.${index}.email`}
                placeholder="Enter developer's email"
                className="mt-6"
              />

              <div className="mt-6 react-select-reset">
                <label htmlFor="" className="mb-1 text-sm font-normal">
                  Developer&lsquo;s Role
                </label>
                <Select
                  classNames={{ control: () => 'p-2' }}
                  styles={{
                    control: (base) => ({ ...base, borderRadius: 8 }),
                  }}
                  value={devRoleOptions.find(
                    (option) => developer.role === option.value,
                  )}
                  options={devRoleOptions}
                  onChange={(value) => {
                    formik.setFieldValue(
                      `developers.${index}.role`,
                      value?.value,
                    )
                  }}
                />
              </div>

              {formik.values.developers?.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    formik.setFieldValue(
                      'developers',
                      formik.values.developers.filter(
                        (dev) => dev.email !== developer.email,
                      ),
                    )
                  }
                  className="border p-4 text-sm rounded-lg w-full mt-4 border-[#DDDDDD]"
                >
                  Remove
                </button>
              )}
            </div>
          )
        })}

        <div className="px-6">
          <button
            type="button"
            onClick={() =>
              formik.setFieldValue('developers', [
                ...formik.values.developers,
                {},
              ])
            }
            className="border p-4 text-sm rounded-lg w-full mt-4 border-[#DDDDDD]"
          >
            Add Developer
          </button>
        </div>

        <div className="px-6 pb-8">
          <Button disabled={disabled} onClick={nextStep} className="mt-4">
            <span>
              <strong>Next:</strong> Select Plan
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default YourProject
