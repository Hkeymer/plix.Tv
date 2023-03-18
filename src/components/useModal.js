import {useState} from 'react'

const useModal = (initialValue=false) => {

      const [open, setOpen] = useState(initialValue)

      const openModal = () => setOpen(true);

      const closeModal = () => setOpen(false);

  return [open,openModal,closeModal];
}

export default useModal