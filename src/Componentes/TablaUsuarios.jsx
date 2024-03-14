import React from 'react'

function TablaUsuarios({usuarios}) {
  return (
    <div>TablaUsuarios
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map(usuario=>(
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.descripcion}</td>
                    </tr>
                ))}
                
            </tbody>
        </table>


    </div>
  )
}

export default TablaUsuarios