import { useRef } from "react";
import { FaRegWindowRestore } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const initial = { width: 1280, heigth: 720 };
const target = { width: 1920, heigth: 1080 };

export function NavBar() {
    const sizeRef = useRef(initial);

    const resizeWindow = () => {
        if (sizeRef.current.width === 1280) {
            sizeRef.current = { ...target };

        } else {
            sizeRef.current = { ...initial };     
        }
        
        window.resizeTo(sizeRef.current.width, sizeRef.current.heigth);
        window.moveTo((sizeRef.current.width / 5), (sizeRef.current.heigth / 5));
    }

  return (
    <section className="flex w-full justify-end px-3 pt-3">
        <div className="inline-flex gap-3">
            <FaRegWindowRestore
                size={20} 
                onClick={resizeWindow}
                className="text-gray-500 hover:text-cyan-600"
            />
            
            <MdClose 
                size={24} 
                onClick={() => window.close()}
                className="text-gray-500 hover:text-red-600"
            />
        </div>
    </section>
  )
}