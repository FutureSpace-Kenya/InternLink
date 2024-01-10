// Pagination Component
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    let startPage, endPage;
    if (totalPages <= 4) {
        // less than 4 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 4 total pages so calculate start and end pages
        if (currentPage <= 2) {
            startPage = 1;
            endPage = 4;
        } else if (currentPage + 1 >= totalPages) {
            startPage = totalPages - 3;
            endPage = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage = currentPage + 1;
        }
    }

    const pageNumbers = [...Array(endPage + 1 - startPage).keys()].map(
        (i) => i + startPage
    );

    return (
        <div className="join mt-5">
            <button
                className="join-item btn btn-sm"
                onClick={() => onPageChange(1)}
            >
                «
            </button>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    className={`join-item btn btn-sm ${
                        number === currentPage ? "btn-primary" : ""
                    }`}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </button>
            ))}
            <button
                className="join-item btn btn-sm"
                onClick={() => onPageChange(totalPages)}
            >
                »
            </button>
        </div>
    );
};

export default Pagination;
