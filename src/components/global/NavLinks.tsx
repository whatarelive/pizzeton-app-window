import clsx from "clsx";
import { NavLink } from "react-router";
import { IoMdHome, IoIosListBox, IoIosCalendar } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import type { Route } from "@/interfaces";

const routes: Route[] = [{
  label: 'Inicio',
  path: '/',
  icon: IoMdHome
},
{
  label: 'Productos',
  path: '/products',
  icon: IoIosListBox
},
{
  label: 'Eventos',
  path: '/events',
  icon: IoIosCalendar
},
{
  label: 'Opiniones',
  path: '/opinions',
  icon: IoChatboxEllipses
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