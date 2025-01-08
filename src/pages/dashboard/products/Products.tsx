import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductsTable } from "@/Views/ProductsTable";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { MdListAlt, MdOutlineSearch, MdAdd, MdOutlineSwapVert, MdFilterList } from "react-icons/md";
import { getProducts } from "@/actions/products";

export default function Products() {
  return (
    <div className="flex flex-col px-16 py-10 gap-6">
      {/* Toolbar */}
      <div className="inline-flex justify-evenly">

        {/* Title */}
        <div className="inline-flex flex-1 gap-2 items-end">
          <MdListAlt size={32} color="#333"/>
          <h1 className="text-p_gray_900 font-bold text-lg">
            Productos
          </h1>
        </div>

        {/* Controls Menu */}
        <div className="flex flex-0 min-w-[405px] justify-between">
          <form action={() => {}}>
            <Input type="text" placeholder="¿Qué estás buscando?" className="items-center gap-2 w-[235px] h-10">
              <MdOutlineSearch size={24} color="#333" className="min-w-6"/>
            </Input>
          </form>

          <Button size="icon" variant="outline">
            <MdOutlineSwapVert size={20} color="#333"/>
          </Button>

          <Button size="icon" variant="outline">
            <MdFilterList size={20} color="#333"/>
          </Button>
          
          <Button size="icon" variant="destructive" className="hover:bg-p_rose_900">
            <MdAdd size={24} className="min-w-[28px]"/>
          </Button>
        </div>
      </div>

      {/* Tabla de productos */}
      <Suspense fallback={<h2>Cargando......</h2>}>
        <ProductsTable getProducts={getProducts()}/>
      </Suspense>

      {/* Paginizacion de la tabla */}
      <Pagination className="text-p_gray_900">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </div>
  )
}
