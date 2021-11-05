import React from "react";

const TableHeader = ({ columns, onSort, sortColumn }) => {
    const handleSort = (path) => {
        if (sortColumn.path === path) {
            if (sortColumn.order === "asc") onSort({ path, order: "desc" });
            else onSort({ path, order: "asc" });
        } else {
            onSort({ path, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th
                        onClick={() => handleSort(column.path)}
                        key={column.label}
                        style={{ cursor: "pointer" }}
                        scope="col"
                    >
                        {column.label}{" "}
                        {sortColumn.path === column.path ? (
                            sortColumn.order === "asc" ? (
                                <i class="bi bi-sort-down-alt"></i>
                            ) : (
                                <i class="bi bi-sort-down"></i>
                            )
                        ) : null}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHeader;
