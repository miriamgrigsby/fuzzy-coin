// React
import { toast } from 'react-toastify'

// Styles
import 'react-toastify/dist/ReactToastify.css'

// Modules, Utils, Types
import { Toasty } from '../FuzzyToolsComponents/types'

export const triggerToast = (option: Toasty): void => {
  toast(option.description)
}
