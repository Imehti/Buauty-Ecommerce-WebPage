import { Button } from "./ui/button";

interface ProductCardsProps{
    name:string,
    price:string,
    price_sign: string;
    image_link: string;
    product_type: string;

}

const ProductCards = ({name,price,price_sign,image_link,product_type}:ProductCardsProps) => {
  return (
    <>
      <div className="relative m-4  flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <img
            className="w-full aspect-square rounded-t-md"
            src={image_link}
            alt=""
          />
        </div>
        <div className="m-4 flex items-center justify-between">
          <p>{product_type}</p>
          <div className="flex items-center m-1">
            <span>4.0</span>
            <svg
              className="w-4 h-4 text-yellow-300 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
        </div>
        <div className="ml-3 flex flex-col justify-center">
          <p>{name}</p>
          <span>{price}{price_sign}</span>
        </div>
        <div className="flex justify-center items-center mt-1 mb-2">
        <Button size={'sm'}>ADD TO CART</Button>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
