import React from 'react';

import '../assets/css/table.css'

import { useState, useEffect } from 'react';

function Users(){
    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/user/usersList')
        .then(response => response.json())
        .then(data => {
            setUsers(data.users)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[users])
    
    console.log(users.map[1])

    return(
        <div className='contentTable'>
        <h2 className='title'>Listado de Usuarios</h2>
        <table>
            <thead>
            <tr className='headerTable'>
                <th>Nombre</th>
                <th>Correo</th>
            </tr>
            </thead>
            <tbody className='boddyTable'>
            {users.map((us , i)=>{
                return(
                    <tr key={i}>
                  <td >
                        {us[1]}
                  </td> 
                  <td >
                        {us[2]}
                  </td>
                  </tr>)
                })}  
            </tbody>
        </table>
        </div>
    )
}

export default Users