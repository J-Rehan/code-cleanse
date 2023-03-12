import React from 'react'
import { cn } from '../../../utils/style'
import Button from '../../shared/Button/Button'

interface PricingCardProps {
  title: string
  cost: number
  isOneTime: boolean
  costFrequency: string
  description: string
  selected?: boolean
  className?: string
  discountPercent?: number
  isRecommended?: boolean
  loading?: boolean
  onClick?: () => void
  onSelect?: () => void
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const {
    title,
    cost,
    loading,
    isOneTime,
    costFrequency,
    description,
    selected = false,
    isRecommended = false,
    className,
    discountPercent,
    onSelect,
    onClick,
  } = props

  return (
    <div
      className={cn(
        'border cursor-pointer rounded-2xl mr-4 transition-all duration-300 bg-white hover:shadow-lg relative',
        selected ? 'border-blue' : 'border-[#ddd]',
        className,
      )}
      onClick={onClick}
    >
      {discountPercent && (
        <div
          className="absolute -top-1.5 right-4 w-[56px] h-[62px] bg-no-repeat flex justify-center flex-col items-center text-white text-sm pb-1"
          style={{ backgroundImage: "url('/label.png')" }}
        >
          <p>Save</p>
          <p className="font-bold">{discountPercent}%</p>
        </div>
      )}
      <div
        className={cn(
          'px-4 py-3 border-b border-transparent',
          isRecommended && 'border-[#ddd]',
        )}
      >
        {isRecommended && (
          <h4 className="text-green text-sm font-bold">Recommended</h4>
        )}
      </div>
      <div className="pt-2 px-6 pb-4 border-b border-[#ddd] flex flex-col items-center">
        <h2 className="text-xl text-black font-[300]">{title}</h2>
        <h3 className="mt-2 text-green font-[500] text-xl">
          {formatter.format(cost)}
          {isOneTime && ' /mo'}
        </h3>
        <h4 className="text-sm font-light">{costFrequency}</h4>
      </div>
      <div className={cn('p-6', selected ? 'pb-4' : 'pb-8')}>
        <p className="text-sm text-center">{description}</p>
        {selected && (
          <Button
            onClick={(event) => {
              event.stopPropagation()
              onSelect()
            }}
            type="button"
            className="py-3 mt-10"
          >
            {loading ? 'Selecting...' : 'Select Plan'}
          </Button>
        )}
      </div>
    </div>
  )
}

export default PricingCard
