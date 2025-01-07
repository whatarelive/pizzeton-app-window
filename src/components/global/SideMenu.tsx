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
        `flex flex-col justify-start bg-p_gray_900 bg-blend-normal transition-all duration-700`,
        {
          'w-[295px]' : isOpen,
          'w-[100px]' : !isOpen 
        }
      )}
    >
        {/* Header */}
        <div className="inline-flex mt-[45px] gap-3 items-center justify-center">
            <Logo color="#e2583a"/>
            
            {
              isOpen && (
                <span className="text-lg text-nowrap text-p_rose_600 font-bold overflow-hidden">
                  Pizzetón D&apos;Gutí
                </span>
              )
            }
        </div>
        
        {/* Open Menú Button */}
        <IoIosArrowForward size={40} onClick={change} 
          className={clsx(
            'absolute top-[99px] p-2 rounded-full text-white bg-p_gray_900 hover:bg-p_rose_600 hover:shadow-sm hover:shadow-p_gray_600 transition-all duration-[600ms]',
            {
              'rotate-180 left-[220px]' : isOpen, 
              'left-[75px]' : !isOpen
            }
          )}
        />

        {/* Navigation Links */}
        <div className="h-full mt-8 px-4">
          <p className={clsx(
              "mb-5 font-bold text-p_gray_400 transition-all duration-1000", 
              { 
                'text-start' : isOpen, 
                'text-center' : !isOpen
              }
            )}
          >
            Menú
          </p>

          <NavLinks isOpen={isOpen}/>
        </div>

        {/* Decoration */}
        <span className="absolute bottom-0 left-0 w-[100px] h-[100px] opacity-30 bg-p_rose_600 blur-xl"/>

        {/* User Config */}
        {/* TODO: falta recuperar la sesión del usuario para obtener el nombre */}
        <NavLink to="/config" className="flex mb-6 gap-3 py-1 justify-center px-5 items-end z-10">
          <IoMdPerson className="bg-gray-200 min-w-[44px] text-p_gray_900 rounded-full p-1.5" size={50}/>

          {
            isOpen && (
              <div className="py-1 overflow-hidden">
                <p className="mb-1 text-nowrap overflow-hidden">
                  Debren Gutierrez
                </p>
                
                <span className="text-p_rose_300 text-xs border-[1px] border-p_rose_300 bg-p_rose_900 bg-opacity-25 rounded-full py-0.5 px-1.5">
                  Administrador
                </span>
              </div>
            )
          }
        </NavLink>
    </section>
  )
}