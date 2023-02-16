import { FieldArray, useFormikContext } from 'formik'
import Image from 'next/image'
import Select from 'react-select'
import useSteps from '../../../hooks/useSteps'
import Button from '../../shared/Button/Button'
import FormikCheckboxGroup, {
  CheckBoxItem,
} from '../../shared/Formik/FormikCheckboxGroup/FormikCheckboxGroup'
import FormikTextArea from '../../shared/Formik/FormikTextArea/FormikTextArea'
import FormikTextInput from '../../shared/Formik/FormikTextInput/FormikTextInput'

const helpOptions = [
  { value: 'manage-dev-team', label: 'I need to manage my development team' },
  { value: 'need-code-review', label: 'I need to perform code review' },
  {
    value: 'performance-improvement',
    label: 'I need to improve the performance my existing application',
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

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' })
  }

  console.log(formik.values)

  return (
    <div>
      <div className="py-8 px-6 flex flex-col h-full">
        <h2 className="text-dark text-2xl font-normal mb-8 text-center">
          Your Project
        </h2>

        <div className="hidden rounded-lg" />

        <div className="flex items-center p-4 space-x-4 bg-[#EBF9FF] border rounded-md border-[#009BE0] mb-6">
          <Image src="/icons/smile.png" height={24} width={24} alt="Smile" />
          <p className="text-base">
            Don&lsquo;t worry if you don&lsquo;t have all information available.
            Inform as much as you can.
          </p>
        </div>

        <div className="mb-auto">
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
              How can we help you?
            </label>
            <Select
              classNames={{ control: () => 'p-2' }}
              styles={{ control: (base) => ({ ...base, borderRadius: 8 }) }}
              value={helpOptions.find(
                (option) => option.value === formik.values.helpMethod,
              )}
              options={helpOptions}
              onChange={(value) =>
                formik.setFieldValue('helpMethod', value?.value)
              }
            />
            {formik.errors.helpMethod && formik.touched.helpMethod && (
              <p className="text-red-500 text-sm font-normal mt-1">
                {formik.errors.helpMethod as any}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label htmlFor="" className="mb-1 text-sm font-normal">
              What are you building?
            </label>
            <Select
              isMulti
              classNames={{ control: () => 'p-2' }}
              styles={{ control: (base) => ({ ...base, borderRadius: 8 }) }}
              value={productCategoryOpts.filter((option) =>
                formik.values.productCategory.split(',').includes(option.value),
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
            label="Brief description of the project"
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

            <div className="mt-6">
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
                  formik.setFieldValue(`developers.${index}.role`, value?.value)
                }}
              />
              {/* {formik.errors.productCategory &&
                  formik.touched.productCategory && (
                    <p className="text-red-500 text-sm font-normal mt-1">
                      {formik.errors.productCategory as any}
                    </p>
                  )} */}
            </div>
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
            <strong>Next:</strong> Hire Plan
          </span>
        </Button>
      </div>
    </div>
  )
}

export default YourProject
