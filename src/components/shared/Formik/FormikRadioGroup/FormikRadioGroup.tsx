import { Field, useField } from 'formik'
import { DetailedHTMLProps, Fragment, InputHTMLAttributes } from 'react'
import { cn } from '../../../../utils/style'

export type RadioItem = {
  value: string
  title: string
  subtitle: string
  callout: string
}

interface FormikTextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  items: RadioItem[]
  // onUpdate
}

const FormikRadioGroup: React.FC<FormikTextInputProps> = (props) => {
  const { items, name, className = '', ...restProps } = props
  const [field, meta, helpers] = useField(name as any)

  const hasError = meta.error && meta.touched

  return (
    <div className={className}>
      <div className="space-y-4">
        {items.map((item) => {
          const isChecked = field.value === item.value

          return (
            <label
              key={item.value}
              className={cn(
                'flex items-center p-4 rounded-[4px] border cursor-pointer',
                isChecked ? 'border-blue' : 'border-[#dddddd]',
              )}
            >
              <Field
                type="radio"
                name={name}
                value={item.value}
                checked={isChecked}
                className="mr-2 hidden"
              />
              <div
                className={cn(
                  'w-6 h-6 border rounded-full flex justify-center items-center',
                  isChecked ? 'border-blue' : 'border-dark',
                )}
              >
                {isChecked && <div className="w-3 h-3 bg-blue rounded-full" />}
              </div>

              <div className="mr-auto ml-2">
                <h3 className="text-base text-dark font-light">{item.title}</h3>
                <h3 className="text-sm text-dark font-light">
                  {item.subtitle}
                </h3>
              </div>

              <span className="text-xs font-light">{item.callout}</span>
            </label>
          )
        })}
      </div>
      {hasError && (
        <p className="text-red-500 text-sm font-normal mt-1">{meta.error}</p>
      )}
    </div>
  )
}

export default FormikRadioGroup
