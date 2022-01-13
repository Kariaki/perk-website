import React from 'react'

const TableComp = () => {
    return (
        <>
            <table className="table w-100">
                <thead>
                    <tr>
                        <th scope="col">Order</th>
                        <th scope="col">Customers</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody className='w-100'>
                    <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>2000</td>
                        <td>7:300am</td>
                        <td>pending</td>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>2000</td>
                        <td>7:300am</td>
                        <td>pending</td>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>2000</td>
                        <td>7:300am</td>
                        <td>pending</td>
                    </tr>
                    <tr>
                        <td>#12345</td>
                        <td>John Doe</td>
                        <td>2000</td>
                        <td>7:300am</td>
                        <td>pending</td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default TableComp
