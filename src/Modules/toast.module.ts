//Components
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Types
// import { Toasty } from '../types'

export const triggerToast = (option: any): void => {
  toast(option.description)
}
