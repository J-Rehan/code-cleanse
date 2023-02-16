import AboutYouStep from '../../components/Hire/Steps/AboutYouStep'
import BenefitsStep from '../../components/Hire/Steps/BenefitsStep'
import HirePlanStep from '../../components/Hire/Steps/HirePlanStep'
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
]
