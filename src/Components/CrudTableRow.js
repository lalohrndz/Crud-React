import React from 'react'

const CrudTableRow =({el})=>{
    return(
        <>
        <tr>
            <td>{el.name}</td>
            <td>{el.constellation}</td>
            <td>
                <button>Eliminar</button>
                <button>Editar</button>
            </td>
        </tr>
        </>
    )
}

export default CrudTableRow;