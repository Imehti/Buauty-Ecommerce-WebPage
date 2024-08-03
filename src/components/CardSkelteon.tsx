const ProductCardSkeleton = () => {
    const isMobile = window.innerWidth < 768; // 768px is the default width for md size in tailwindcss
  
    return (
      <div className={isMobile ? "grid grid-cols-1 gap-4" : "m-4 grid grid-cols-4 gap-4"}>
        {isMobile ? (
          <div className="flex flex-col m-8 rounded shadow-md w-full h-96 bg-white border border-gray-200">
            <div className="h-48 rounded-t bg-gray-200 animate-pulse"></div>
            <div className="flex-1 flex-row justify-between px-4 py-8 space-y-4 sm:p-8">
              <div className="flex h-fit space-x-4 justify-between">
                <div className="w-full h-6 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-full h-6 rounded bg-gray-200 animate-pulse"></div>
              </div>
              <div className="flex-2 flex-col justify-between space-y-4 items-center">
                <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-center h-fit mb-4">
              <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
            </div>
          </div>
        ) : (
          Array(4).fill('').map((_, index) => (
            <div key={index} className="flex flex-col m-8 rounded shadow-md w-full h-96 bg-white border border-gray-200">
              <div className="h-48 rounded-t bg-gray-200 animate-pulse"></div>
              <div className="flex-1 flex-row justify-between px-4 py-8 space-y-4 sm:p-8">
                <div className="flex h-fit space-x-4 justify-between">
                  <div className="w-full h-6 rounded bg-gray-200 animate-pulse"></div>
                  <div className="w-full h-6 rounded bg-gray-200 animate-pulse"></div>
                </div>
                <div className="flex-2 flex-col justify-between space-y-4 items-center">
                  <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
                  <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-center h-fit mb-4">
                <div className="w-1/2 h-6 rounded bg-gray-200 animate-pulse"></div>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };
  export default ProductCardSkeleton;