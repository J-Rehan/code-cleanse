import AboutYouStep from '../../components/Hire/Steps/AboutYouStep'
import HirePlanStep from '../../components/Hire/Steps/HirePlanStep'
import PaymentStep from '../../components/Hire/Steps/PaymentStep'
import YourProject from '../../components/Hire/Steps/YourProject'

export const steps = [
  {
    id: 'sign-up',
    component: <AboutYouStep />,
  },
  {
    id: 'your-project',
    component: <YourProject />,
  },
  {
    id: 'hire-plan',
    component: <HirePlanStep />,
  },
  {
    id: 'payment',
    component: <PaymentStep />,
  },
]
