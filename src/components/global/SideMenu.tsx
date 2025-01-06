import clsx from "clsx";
import { NavLink } from "react-router";
import { IoIosArrowForward, IoMdPerson } from "react-icons/io";
import { useMenuStore } from "@/store/MenuStore";
import { NavLinks } from "@/components/global/NavLinks";
import { Logo } from "@/components/global/Logo";

export function SideMenu() {
  const { isOpen, change } = useMenuStore((state) => state);

  return (
    <section 
      className={clsx(
        `flex flex-col justify-start py-4 bg-window transition-all duration-700`,
        {
          'w-[300px]' : isOpen,
          'w-[100px]' : !isOpen 
        }
      )}
    >
        {/* Header */}
        <div className="inline-flex p-4 mb-3 gap-3 items-center justify-center">
            <div className="min-w-[50px]">
              <Logo color="#ef4444"/>
            </div>
            
            {
              isOpen && (
                <span className="text-xl text-nowrap text-red-400 font-semibold">
                  Pizzeton D&apos;Gutí
                </span>
              )
            }
        </div>

        {/* Open Menú Button */}
        <div className="relative left-5 mb-5 inline-flex items-center justify-center">
          <p className="text-lg font-semibold text-gray-200 w-full">
            Menú
          </p>

          <button className="p-1 bg-window rounded-full hover:bg-red-500 transition-all" onClick={change}>
            <IoIosArrowForward size={32} color="#fff" className={clsx({'rotate-180 transition-all duration-700': isOpen })}/>
          </button>
        </div>

        {/* Navigation Links */}
        <NavLinks isOpen={isOpen}/>

        {/* User Config */}
        {/* TODO: falta recuperar la sesión del usuario para obtener el nombre */}
        <NavLink to="/config" className="flex gap-3 py-1 justify-center px-5 items-end">
          <IoMdPerson className="bg-gray-200 min-w-[48px] text-window rounded-full p-1.5" size={48}/>

          {
            isOpen && (
              <div className="py-1">
                <p className="text-lg text-nowrap font-semibold mb-2">
                  Debren Gutierrez
                </p>
                
                <span className="text-red-400 text-sm font-medium border-2 border-red-400 bg-red-400 bg-opacity-25 rounded-full py-0.5 px-1.5">
                  Administrador
                </span>
              </div>
            )
          }
        </NavLink>
    </section>
  )
}