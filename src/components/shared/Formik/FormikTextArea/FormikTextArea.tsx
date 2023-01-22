import { useField } from 'formik'
import { DetailedHTMLProps, Fragment, TextareaHTMLAttributes } from 'react'
import { cn } from '../../../../utils/style'

interface FormikTextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: string
}

const FormikTextArea: React.FC<FormikTextAreaProps> = (props) => {
  const { name, label, className = '', ...restProps } = props
  const [field, meta, helpers] = useField(name as any)

  const hasError = meta.error && meta.touched

  return (
    <div className={className}>
      <label htmlFor={`${name}-field`} className="mb-1 text-sm font-normal">
        {label}
      </label>
      <div className="relative">
        <textarea
          className={cn(
            `text-sm font-normal rounded-lg p-4 bg-white border-[#BFBFBF] border w-full focus:shadow-md transition-all duration-100 focus:transition-all focus:duration-100 focus:outline-[#2C39BC] ${
              hasError ? 'border-red-500' : ''
            }`,
            meta.touched && !meta.error
              ? 'border-[#009BE0] focus:outline-[#2C39BC]'
              : '',
          )}
          {...field}
          {...restProps}
        />
      </div>
      {hasError && (
        <p className="text-red-500 text-sm font-normal mt-1">{meta.error}</p>
      )}
    </div>
  )
}

export default FormikTextArea
