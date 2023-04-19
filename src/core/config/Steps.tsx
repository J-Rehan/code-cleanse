import SignUp from '../../components/Hire/Steps/SignUpStep'
import HirePlanStep from '../../components/Hire/Steps/HirePlanStep'
import PaymentStep from '../../components/Hire/Steps/PaymentStep'
import YourProject from '../../components/Hire/Steps/YourProject'

export const steps = [
  {
    id: 'sign-up',
    component: <SignUp />,
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
