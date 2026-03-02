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
        <div className="flex flex-col items-center justify-center m-5">
            <Image src={product.image} alt="profilepic" width={200} height={300}></Image>
        </div>
        <div className="flex flex-col flex-1 items-center justify-center text-2xl">
            <h2 className="font-bold text-md ">{product.title}</h2>
        </div>
        <div className="flex items-center justify-center pt-3 pb-5 text-3xl font-bold text-blue-600">
            <h2 className="font-bold text-md ">{product.price} $</h2>
        </div>
         <div className="flex justify-center rounded-xl bg-green-400 w-50 h-10 text-xl cursor-pointer hover:opacity-80 transition-all">
            <button className="font-bold text-md cursor-pointer">ADD TO CART</button>
        </div>
    </div>
  )
}
export default ProductCard
