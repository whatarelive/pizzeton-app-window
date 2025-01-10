import { useParams } from "react-router"

export default function EditProduct() {
  const params = useParams();

  return (
    <div className="text-black">
       <h1>EditProduct</h1>
       <p>{params.id}</p>
    </div>
  )
}
