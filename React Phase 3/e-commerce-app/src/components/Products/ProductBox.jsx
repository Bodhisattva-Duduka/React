import { Star } from "lucide-react";
import { Link } from "react-router-dom"

function ProductBox({ id, title, price, thumbnail, rating }) {

  return (
    <Link to={`/products/${id}`}

      className="group cursor-pointer overflow-hidden border border-gray-200 bg-white transition duration-200 hover:border-gray-400 hover:shadow-md"
    >
      <div className="flex aspect-square items-center justify-center overflow-hidden bg-gray-100">
        <img
          src={thumbnail}
          className="h-full w-full object-cover transition duration-300"
        />
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="line-clamp-2 min-h-[3.5rem] text-base font-semibold leading-7 text-gray-950">
          {title}
        </h3>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1 text-sm font-medium text-gray-500">
            <Star size={15} fill="currentColor" />
            <span>{rating}/5</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-950">
            ${price}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default ProductBox;