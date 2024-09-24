import Image from "next/image";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination mt-8 flex flex-col items-center">
      <div className="flex justify-center items-center space-x-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
          className="flex items-center justify-center px-4 py-2 border rounded bg-white transition duration-200 ease-in-out hover:bg-blue-400"
          disabled={currentPage === 1}
        >
          <Image
            src="/Vector (11).svg"
            width="10"
            height="10"
            alt="Previous"
            className="inline"
          />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`px-3 py-2 border rounded transition duration-200 ease-in-out hover:bg-blue-400 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white"
            } text-xs sm:text-base md:text-lg`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() =>
            onPageChange(
              currentPage < totalPages ? currentPage + 1 : totalPages
            )
          }
          className="flex items-center justify-center px-4 py-2 border rounded bg-white transition duration-200 ease-in-out hover:bg-blue-400"
          disabled={currentPage === totalPages}
        >
          <Image
            src="/Vector (10).svg"
            width="10"
            height="10"
            alt="Next"
            className="inline"
          />
        </button>
      </div>

      {/* Optional: Add a message displaying the current page */}
      <p className="mt-2 text-sm">
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
