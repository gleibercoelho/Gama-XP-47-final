export interface ParentComponentProps {
    onPageChange: (page: number) => void;
    totalItems: number;
    pageSize: number;
    currentPage: number;
  }


const ParentComponent: React.FC<ParentComponentProps> = ({
    onPageChange,
    totalItems,
    pageSize,
    currentPage,
  }) => {
    const totalPages = Math.ceil(totalItems / pageSize);
  
    const getPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    };
  
    const handlePageClick = (page: number) => {
      onPageChange(page);
    };
  
    return (
      <div>
        {totalItems > 0 && (
          <div className="pagination">
            <ul className="pagination-list">
              {getPageNumbers().map((page) => (
                <li key={page}>
                  <button
                    className={`pagination-link ${
                      currentPage === page ? "is-current" : ""
                    }`}
                    onClick={() => handlePageClick(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default ParentComponent;