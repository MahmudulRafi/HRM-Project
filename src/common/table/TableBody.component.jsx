import React from "react";

const TableBody = ({ items, columns }) => {
    return (
        <tbody>
            {items.map((item) => (
                <tr>
                    {columns.map((column) => (
                        <td>{column.content(item)}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
