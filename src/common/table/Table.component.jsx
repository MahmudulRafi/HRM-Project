import React from "react";
import TableBody from "./table-body.component";
import TableHeader from "./TableHeader.component";

const TableHH = ({ columns, items, onSort, sortColumn }) => {
    return (
        <table class="table">
            <TableHeader
                columns={columns}
                onSort={onSort}
                sortColumn={sortColumn}
            />
            <TableBody columns={columns} items={items} />
        </table>
    );
};

export default TableHH;
