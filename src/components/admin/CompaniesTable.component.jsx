import React from "react";
import Table from "../../common/Table.component";

export function CompaniesTable({ columns, data }) {
    return (
        <div>
            <Table columns={columns} data={data} />
        </div>
    );
}
