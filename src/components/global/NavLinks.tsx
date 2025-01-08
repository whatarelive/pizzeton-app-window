import clsx from "clsx";
import { NavLink } from "react-router";
import { MdHome, MdListAlt, MdCalendarMonth, MdChat } from "react-icons/md";
import type { Route } from "@/interfaces";

const routes: Route[] = [{
  label: 'Inicio',
  path: '/',
  icon: MdHome
},
{
  label: 'Productos',
  path: '/products',
  icon: MdListAlt
},
{
  label: 'Eventos',
  path: '/events',
  icon: MdCalendarMonth
},
{
  label: 'Opiniones',
  path: '/opinions',
  icon: MdChat
},]

interface Props {
  isOpen: boolean;
}

export function NavLinks({ isOpen }: Props) {
  return (
    <ul className="space-y-1.5">
        {
          routes.map((route) => {
            const LinkIcon = route.icon;

            return (
              <NavLink to={route.path}
                className={({ isActive }) => clsx(
                  'inline-flex h-14 p-4 w-full gap-2 items-center text-p_gray_400 rounded-lg transition-all duration-300', 
                  {
                    'bg-p_rose_600 bg-opacity-30 text-p_rose_300 w-full' : isActive,
                    'hover:bg-p_gray_600' : !isActive,
                    'justify-center': !isOpen,
                  }
                )}
              >
                <LinkIcon size={24} className="min-w-6"/>

                {
                  isOpen && (
                    <span className='overflow-hidden'>
                      { route.label }
                    </span>
                  )
                }
              </NavLink>
            )
          })
        }
    </ul>
  )
}