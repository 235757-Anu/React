import React from 'react'

function Marklist(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Mark</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map(function(value, index) {
                        return (
                            <tr>
                                <td>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.mark}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default Marklist
