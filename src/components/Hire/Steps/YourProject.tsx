import { useFormikContext } from 'formik'
import useSteps from '../../../hooks/useSteps'
import Button from '../../shared/Button/Button'
import FormikCheckboxGroup, {
  CheckBoxItem,
} from '../../shared/Formik/FormikCheckboxGroup/FormikCheckboxGroup'
import FormikTextArea from '../../shared/Formik/FormikTextArea/FormikTextArea'

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

const YourProject: React.FC = () => {
  const formik = useFormikContext()
  const { state, dispatch } = useSteps()
  const step = state.steps.find((step) => step.name === 'Your project')
  const disabled = !!Object.keys(formik.errors).find((key) =>
    step?.fields.includes(key),
  )

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' })
  }

  console.log(formik.errors)
  console.log(formik.values)

  return (
    <div className="py-8 px-6 flex flex-col h-full">
      <h2 className="text-dark text-2xl font-normal mb-8">
        What are you building?
      </h2>

      <div className="mb-auto">
        <FormikCheckboxGroup
          name="productCategory"
          items={productCategoryOpts}
        />
        <FormikTextArea
          name="description"
          className="mt-6"
          label="Brief description of the project"
          placeholder="Describe the project"
        />
      </div>

      <Button disabled={disabled} onClick={nextStep} className="mt-4">
        <span>
          <strong>Next:</strong> Hire Plan
        </span>
      </Button>
    </div>
  )
}

export default YourProject
