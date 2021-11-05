import React from "react";
import MaterialTable from "material-table";

function Table({ columns, data }) {
    return (
        <div>
            <MaterialTable columns={columns} data={data} />
        </div>
    );
}

export default Table;
