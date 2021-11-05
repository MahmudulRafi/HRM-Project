import react from "react";
import _ from "lodash";

function Pagination() {
    const { totalItemsCount, activePage, itemsPerPage, onActivePage } =
        this.props;

    const totalPages = Math.ceil(totalItemsCount / itemsPerPage) + 1;
    const pages = _.range(1, totalPages, 1);

    if (totalItemsCount <= itemsPerPage) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li
                    onClick={() =>
                        activePage - 1 >= 1
                            ? onActivePage(activePage - 1)
                            : null
                    }
                    class="page-item"
                    style={{ cursor: "pointer" }}
                >
                    <a class="page-link">Previous</a>
                </li>
                {pages.map((page) => (
                    <li
                        onClick={() => onActivePage(page)}
                        class={
                            activePage === page
                                ? "page-item active"
                                : "page-item"
                        }
                        style={{ cursor: "pointer" }}
                    >
                        <a class="page-link">{page}</a>
                    </li>
                ))}
                <li
                    onClick={() =>
                        activePage + 1 <= totalPages - 1
                            ? onActivePage(activePage + 1)
                            : null
                    }
                    class="page-item"
                    style={{ cursor: "pointer" }}
                >
                    <a class="page-link">Next</a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;
