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
  onClick?: () => void
  onSelect?: () => void
}

const PricingCard: React.FC<PricingCardProps> = (props) => {
  const {
    title,
    cost,
    isOneTime,
    costFrequency,
    description,
    selected = false,
    className,
    onSelect,
    onClick,
  } = props

  return (
    <div
      className={cn(
        'border cursor-pointer rounded-2xl mr-4 transition-all duration-300 bg-white hover:shadow-lg',
        selected ? 'border-blue' : 'border-[#ddd]',
        className,
      )}
      onClick={onClick}
    >
      <div className="pt-10 px-6 pb-6 border-b border-[#ddd] flex flex-col items-center">
        <h2 className="text-xl text-black font-[300]">{title}</h2>
        <h3 className="mt-2 text-green font-[500] text-xl">
          ${cost}
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
            className="py-3 mt-10"
          >
            Select Plan
          </Button>
        )}
      </div>
    </div>
  )
}

export default PricingCard
