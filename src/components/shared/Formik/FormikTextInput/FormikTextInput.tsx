import { useField } from 'formik'
import {
  ChangeEventHandler,
  DetailedHTMLProps,
  Fragment,
  InputHTMLAttributes,
} from 'react'
import { cn } from '../../../../utils/style'

interface FormikTextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  formatter?: (value: string) => string
}

const FormikTextInput: React.FC<FormikTextInputProps> = (props) => {
  const { label, name, className = '', formatter, ...restProps } = props
  const [field, meta, helpers] = useField(name as any)

  const hasError = meta.error && meta.touched

  let actionImage = <Fragment />

  if (meta.touched) {
    if (meta.error) {
      actionImage = (
        <button onClick={() => helpers.setValue('')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_173_2858"
              // style="mask-type:alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_173_2858)">
              <path
                d="M8.4 16.3L12 12.7L15.6 16.3L16.3 15.6L12.7 12L16.3 8.4L15.6 7.7L12 11.3L8.4 7.7L7.7 8.4L11.3 12L7.7 15.6L8.4 16.3ZM12 21C10.75 21 9.57933 20.7627 8.488 20.288C7.396 19.8127 6.446 19.1707 5.638 18.362C4.82933 17.554 4.18733 16.604 3.712 15.512C3.23733 14.4207 3 13.25 3 12C3 10.75 3.23733 9.579 3.712 8.487C4.18733 7.39567 4.82933 6.44567 5.638 5.637C6.446 4.829 7.396 4.18733 8.488 3.712C9.57933 3.23733 10.75 3 12 3C13.25 3 14.421 3.23733 15.513 3.712C16.6043 4.18733 17.5543 4.829 18.363 5.637C19.171 6.44567 19.8127 7.39567 20.288 8.487C20.7627 9.579 21 10.75 21 12C21 13.25 20.7627 14.4207 20.288 15.512C19.8127 16.604 19.171 17.554 18.363 18.362C17.5543 19.1707 16.6043 19.8127 15.513 20.288C14.421 20.7627 13.25 21 12 21Z"
                fill="#FF0000"
              />
            </g>
          </svg>
        </button>
      )
    } else {
      actionImage = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_173_2829"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_173_2829)">
            <path
              d="M9.54995 17.3L4.57495 12.35L5.29995 11.625L9.54995 15.875L18.7 6.72498L19.425 7.44998L9.54995 17.3Z"
              fill="#009BE0"
            />
          </g>
        </svg>
      )
    }
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value
    if (formatter && typeof formatter === 'function') {
      value = formatter(event.target.value)
    }
    helpers.setValue(value)
  }

  return (
    <div className={className}>
      <label htmlFor={`${name}-field`} className="mb-1 text-sm font-normal">
        {label}
      </label>
      <div className="relative">
        <input
          id={`${name}-field`}
          className={cn(
            `text-sm font-normal rounded-lg p-4 bg-white border-[#BFBFBF] border w-full focus:shadow-md transition-all duration-100 focus:transition-all focus:duration-100 focus:outline-[#2C39BC] ${
              hasError ? 'border-red-500' : 'border-[#009BE0]'
            }`,
            meta.touched && !meta.error ? 'border-[#009BE0]' : '',
          )}
          {...field}
          {...restProps}
          onChange={handleChange}
        />
        <div className="absolute right-[5%] top-[50%] transform translate-y-[-40%]">
          {actionImage}
        </div>
      </div>
      {hasError && (
        <p className="text-red-500 text-sm font-normal mt-1">{meta.error}</p>
      )}
    </div>
  )
}

export default FormikTextInput
