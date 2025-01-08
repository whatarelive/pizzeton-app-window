import clsx from "clsx";
import { MdCheckCircle, MdCancel } from "react-icons/md";

export function ProductDisponibility({ stock }: { stock: boolean }) {
  const Icon = stock ? MdCheckCircle : MdCancel;

  return (
    <div className={clsx(
        'flex p-0.5 border-2 bg-opacity-10 rounded-full w-14 h-7',
        {
          'text-p_green border-p_green bg-p_green justify-end' : stock,
          'text-p_rose_900 border-p_rose_900 bg-p_rose_900' : !stock, 
        }
      )}
    >
      <Icon size={20}/>
    </div>
  )
}