import React from 'react'
import TablaUsuarios from './TablaUsuarios'

function ArrayPersonas() {
    const usuarios =[
        {id:1, nombre:"Ivan Palacios", descripcion:"Supervisor"},
        {id:2, nombre:"Jorge Valbuena", descripcion:"Supervisor"},
        {id:3, nombre:"Rocío Centenera", descripcion:"Supervisora"},
        {id:4, nombre:"Sandra Matinez", descripcion:"Supervisora"},
        {id:5, nombre:"Alejandro Mendoza", descripcion:"Supervisor"},
        {id:6, nombre:"Ana Tunaroza", descripcion:"Supervisora"},
        {id:7, nombre:"Sugey Alarcon", descripcion:"Coordinadora"},
        {id:8, nombre:"Oscar Torres", descripcion:"Coordinador"},
        {id:9, nombre:"Diego Moreno", descripcion:"Supervisor"},
        {id:10, nombre:"Carolina Rojas", descripcion:"Supervisora"},
        {id:11, nombre:"Carlos Prada", descripcion:"Supervisor"},
        {id:12, nombre:"Sandra Guerra", descripcion:"Supervisora"},
        {id:13, nombre:"Ariel Cardona", descripcion:"Supervisor"},
        {id:14, nombre:"Viviana Ceron", descripcion:"Supervisora"},
        {id:15, nombre:"Angela Benavidez", descripcion:"Supervisora"},
        {id:16, nombre:"Nidia Montero", descripcion:"Supervisora"},
        {id:17, nombre:"Deisy Gongora", descripcion:"Supervisora"},
        {id:18, nombre:"Patricia Bermdez", descripcion:"Supervisora"},
        {id:19, nombre:"Andrea Guerrero", descripcion:"Supervisoar"},
        {id:20, nombre:"Ignacio Mendez", descripcion:"Supervisor"},
    ]
  return (
    <div>
         <h3>Usuarios</h3>
         <TablaUsuarios usuarios={usuarios}/>

    </div>
  )
}

export default ArrayPersonas; 


