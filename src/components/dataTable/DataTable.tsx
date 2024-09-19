/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ReactElement, ReactNode } from 'react';

export interface DatatableThead {
    element: string | ReactNode | ReactElement;
    className?: string;
    bgColor?: string;
}

interface Props {
    tHead: DatatableThead[];
    data: any[];
    tBodyRender: (value: any, index: number) => any;
}

const NewDatatable: React.FC<Props> = ({ tBodyRender, tHead, data }) => {
    return (
        <div>
            <table className="min-w-full border-collapse border">
                <thead>
                    <tr className="bg-gray-100 table-thead-tr text-nowrap">
                        {tHead.map((item, i) => (
                            <th
                                className={`border px-4 py-2 table-thead-th ${item.className}`}
                                key={i}
                                style={{ backgroundColor: item.bgColor || 'inherit' }}
                            >
                                {item.element}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        const TD = tBodyRender(item, index);
                        return (
                            <tr key={index} className="text-white">
                                {Object.values(TD).map((itemth: any, i) => (
                                    <td
                                        className="table-tbody-td border px-4 py-2 text-center text-nowrap"
                                        key={i}
                                    >
                                        {itemth}
                                    </td>
                                ))}
                                {/* Adding the avatar and the details (name and time) */}
                                <td className="table-tbody-td border px-4 py-2 text-center flex items-center gap-3">
                                    <img
                                        src={item.avatarUrl} // Assuming avatar URL exists
                                        alt="Avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">{item.name}</p>
                                        <p className="text-gray-400">{item.time}</p>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default NewDatatable;
