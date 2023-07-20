import React from 'react'
import Marklist from './Marklist'

const marks = [
    { name: 'Aswathy', age: 22, mark: 'A' },
    { name: 'Anu', age: 22, mark: 'A' },
]

function MarkRoot() {
    return (
        <Marklist data={marks} />
    )
}
export default MarkRoot