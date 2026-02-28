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
    
    <div className="flex flex-col items-center border-2 border-gray-400 rounded-md p-5 m-5">
        <div className="flex justify-between pb-5">
            <Image src={product.image} alt="profilepic" width={200} height={300}></Image>
        </div>
        <div className="flex flex-col items-start pb-5">
            <h2 className="font-bold text-md ">{product.title}</h2>
        </div>
        <div className="flex flex-col items-start">
            <h2 className="font-bold text-md ">{product.price}</h2>
        </div>
    </div>
  )
}
export default ProductCard
