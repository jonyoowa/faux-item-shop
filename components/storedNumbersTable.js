import React from 'react';

export default function StoredNumbersTable({ setShowTable, storedNumbers }) {
    return (
        <div className="mx-auto">
            <div className="bg-white content-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <table class="table-fixed">
                    <thead>
                        <tr>
                            <th className="w-1/2 px-4 py-2">ID</th>
                            <th className="w-1/4 px-4 py-2">Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storedNumbers && storedNumbers.map(num => <StoredNumberRow key={num.id} id={num.id} storedValue={num.storedValue} />)}
                    </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col">
                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={() => setShowTable(false)}>
                        Show Form
                </button>
                </div>
            </div>
        </div>
    )
}

function StoredNumberRow({ id, storedValue }) {
    return (
        <tr>
            <td className="border px-4 py-2">{id}</td>
            <td className="border px-4 py-2">{storedValue}</td>
        </tr>
    )
}