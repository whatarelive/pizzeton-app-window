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
    <ul className="p-5 h-full space-y-2 transition-all">
        {
          routes.map((route) => {
            const LinkIcon = route.icon;

            return (
              <NavLink to={route.path}
                className={({ isActive }) => clsx(
                  'inline-flex w-full gap-2 p-4 items-center text-xl rounded-md', 
                  {
                    'bg-red-400 bg-opacity-30 text-red-400 w-full' : isActive,
                    'hover:bg-secondary' : !isActive
                  }
                )}
              >
                <LinkIcon size={30} className="min-w-[30px]"/>

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