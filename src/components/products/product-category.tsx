import { Category } from "@/interfaces"
import { MdLocalPizza, MdDinnerDining, MdIcecream, MdSportsBar } from "react-icons/md"

const categories = {
  Pizzas: {
    color: 'text-p_rose_900',
    icon: MdLocalPizza
  },
  Pastas: {
    color: 'text-p_golden',
    icon: MdDinnerDining
  },
  Postres: {
    color: 'text-p_violet',
    icon: MdIcecream
  },
  Bebidas: {
    color: 'text-p_blue',
    icon: MdSportsBar
  }
}

export function ProductCategory({ category }: { category: Category }) {
  const { color, icon: Icon } = categories[category]

  return (
    <div className="flex gap-1 items-center">
      <Icon size={16} className={color}/>
      <p className={color}>
        { category }
      </p>
    </div>
  )
}