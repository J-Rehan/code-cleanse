import { Field, useField } from 'formik'
import { DetailedHTMLProps, Fragment, InputHTMLAttributes } from 'react'

export type CheckBoxItem = {
  label: string
  value: string
}

interface FormikTextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  items: CheckBoxItem[]
}

const FormikCheckboxGroup: React.FC<FormikTextInputProps> = (props) => {
  const { items, name, className = '', ...restProps } = props
  const [field, meta, helpers] = useField(name as any)

  const hasError = meta.error && meta.touched

  return (
    <div className={className}>
      <div className="divide-y divide-[#E7E7E7]">
        {items.map((item) => {
          const isChecked = field.value.includes(item.value)

          return (
            <div key={item.value} className="py-4">
              <label className="flex" htmlFor={`${name}-${item.value}`}>
                {isChecked ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_301_3281)">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="1.5"
                        fill="#009BE0"
                        stroke="#009BE0"
                      />
                      <mask
                        id="mask0_301_3281"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_301_3281)">
                        <path
                          d="M9.55001 17.3L4.57501 12.35L5.30001 11.625L9.55001 15.875L18.7 6.72498L19.425 7.44998L9.55001 17.3Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_301_3281">
                        <rect width="24" height="24" rx="3" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_301_3251)">
                      <rect
                        x="0.5"
                        y="0.5"
                        width="23"
                        height="23"
                        rx="2.5"
                        fill="white"
                        stroke="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_301_3251">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                )}
                <Field
                  className="hidden"
                  type="checkbox"
                  id={`${name}-${item.value}`}
                  value={item.value}
                  name={name}
                  {...restProps}
                />

                <span className="ml-6">{item.label}</span>
              </label>
            </div>
          )
        })}
      </div>
      {hasError && (
        <p className="text-red-500 text-sm font-normal mt-1">{meta.error}</p>
      )}
    </div>
  )
}

export default FormikCheckboxGroup
