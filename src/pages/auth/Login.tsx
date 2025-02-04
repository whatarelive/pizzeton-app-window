import { Logo } from "@/components/global/Logo";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="flex flex-col h-[861px] items-center">
      {/* Background */}
      <div className="w-full h-full absolute">
        <img src="/authbg.jpg" alt="fondo" className="absolute w-full h-full"/>
        <span 
          style={{ 
            background: 'linear-gradient(269.87deg, rgba(51, 51, 51, 0.25) 0.11%, rgba(51, 51, 51, 0.7) 25.05%, rgba(51, 51, 51, 0.8) 43.3%, rgba(51, 51, 51, 0.9) 63.9%, #333333)',
            backdropFilter: "blur(50px)"
          }}
          className="h-full w-full absolute" 
        />
      </div>

      {/* Logo Section */}
      <section className="z-50 flex flex-col h-min justify-center items-center gap-3 mt-[52px]">
        <Logo color="#ff866b" className="w-20 h-auto"/>
        
        <h1 className="text-3xl font-black uppercase text-p_rose_300">
          Pizzeton D'Guti
        </h1>
      </section>

      {/* Form Section */}
      <section className="z-50 flex flex-col h-min gap-6 p-8 mt-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-5xl font-bold">
            Bienvenido de nuevo!
          </h2>
          <p className="text-center text-xl text-p_gray_400">
            Inicie sesión para acceder al Panel de control
          </p>
        </div>

        <form action="" className="flex flex-col gap-6">
          <Input 
            label="Nombre de usuario" 
            name="user" 
            type="text"
            placeholder="Ingrese su nombre de usuario" 
            className="bg-[#3B3B3B80] placeholder:text-p_gray_400 text-p_gray_200 border border-[#4F4F4F]"
          />

          <Input 
            label="Contraseña" 
            name="password"
            type="password" 
            placeholder="Ingrese su contraseña" 
            className="bg-[#3B3B3B80] placeholder:text-p_gray_400 text-p_gray_200 border border-[#4F4F4F]"
          />

          <div>
            <Input 
              label="" 
              type="checkbox"
            />
          </div>
        </form>
      </section>
    </div>
  )
}
