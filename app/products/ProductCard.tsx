import Image from "next/image";

interface ProductProps{
    product : {
        id: number;
        title: string;
        price: number;
        image: string;
    }
}

const ProductCard = ({product} : ProductProps) => {
  return (
    
    <div className="flex justify-between border-2 border-gray-400 rounded-md p-5 m-5">
        <div className="">
            
            <div className="flex justify-between">
                <Image src={product.image} alt="profilepic" width={3000} height={4000}></Image>
            </div>
            <h2 className="font-xs">{product.title}</h2>
        </div>
    </div>
  )
}
export default ProductCard
