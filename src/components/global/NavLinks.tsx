import { Route } from "@/interfaces";
import { IoMdHome, IoIosListBox, IoMdCalendar } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { NavLink } from "react-router";
import clsx from "clsx";

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
  icon: IoMdCalendar
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
    <ul className="flex flex-col p-5 h-full w-full space-y-2 transition-all duration-75">
        {
          routes.map((route) => {
            const LinkIcon = route.icon;

            return (
              <NavLink to={route.path}
                className={({ isActive }) => clsx(
                  'inline-flex gap-2 p-4 items-center text-xl rounded-md', 
                  {
                    'bg-red-400 bg-opacity-30 text-red-400 w-full' : isActive,
                    'hover:bg-secondary' : !isActive
                  }
                )}
              >
                <LinkIcon size={30} className="min-w-[30px]"/>

                {
                  isOpen && (
                    <span className='flex'>
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