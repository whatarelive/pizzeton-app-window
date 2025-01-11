import clsx from "clsx";
import { MdCheckCircle, MdCancel } from "react-icons/md";

interface Props {
  stock: boolean;
  onClick?: () => void;
}

export function ProductDisponibility({ stock, onClick }: Props) {
  const Icon = stock ? MdCheckCircle : MdCancel;

  return (
    <div onClick={onClick} className={clsx(
        'flex p-0.5 border-2 bg-opacity-10 rounded-full min-w-14 max-w-14 min-h-7 transition-all duration-700',
        {
          'text-p_green border-p_green bg-p_green justify-end' : stock,
          'text-p_rose_900 border-p_rose_900 bg-p_rose_900 justify-start' : !stock, 
        }
      )}
    >
      <Icon size={20}/>
    </div>
  )
}