import { Field, useField } from 'formik'
import { DetailedHTMLProps, Fragment, InputHTMLAttributes } from 'react'
import { cn } from '../../../../utils/style'

export type RadioItem = {
  value: string
  title: string
  subtitle: string
  callout: string
  description?: string
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
            <div key={item.value}>
              <label
                className={cn(
                  'flex items-center justify-between p-4 rounded-[4px] border cursor-pointer border-[#dddddd]',
                  isChecked
                    ? 'bg-blue bg-opacity-10 rounded-bl-none rounded-br-none'
                    : '',
                )}
              >
                <Field
                  type="radio"
                  name={name}
                  value={item.value}
                  checked={isChecked}
                  className="mr-2 hidden"
                />

                <div className="ml-2">
                  <h3 className="text-xl text-dark font-light">{item.title}</h3>
                  <h3 className="text-sm text-dark font-light">
                    {item.subtitle}
                  </h3>
                </div>
                <span className="text-base font-light text-green">
                  {item.callout}
                </span>
                <div
                  className={cn(
                    'w-6 h-6 border rounded-full flex justify-center items-center',
                    isChecked ? 'border-blue' : 'border-dark',
                  )}
                >
                  {isChecked && (
                    <div className="w-3 h-3 bg-blue rounded-full" />
                  )}
                </div>
              </label>
              {isChecked && (
                <p className="p-4 border border-t-0 rounded-b-[4px] border-[#dddddd]">
                  {item.description}
                </p>
              )}
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

export default FormikRadioGroup
