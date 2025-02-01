import { MdListAlt, MdAdd } from "react-icons/md";
import { Pagination } from "@/components/global/Pagination";
import { Search } from "@/components/global/Search";
import { Button } from "@/components/ui/button";
import { ProductsTable } from "@/components/products/product-table";
import { ProductOrderBy } from "@/components/products/product-orderby";
import { ProductFilters } from "@/components/products/product-filters";
import { ProductDeleteModal } from "@/components/products/product-modal-delete";

export default function Products() {
  return (
    <div className="flex flex-col px-16 py-10 justify-between gap-6 h-full">
      <div className="flex flex-col gap-6">  
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
            <Search/>
            
            <ProductOrderBy/>

            <ProductFilters/>
            
            <Button size="icon" variant="destructive" className="hover:bg-p_rose_900">
              <MdAdd size={24} className="min-w-[28px]"/>
            </Button>
          </div>
        </div>

        {/* Tabla de productos */}
        <ProductsTable/>
      </div>
      {/* Paginizacion de la tabla */}
      <Pagination/>

      {/* Modal para confirmar eliminación un producto */}
      <ProductDeleteModal/>
    </div>
  )
}
