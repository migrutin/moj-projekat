import React, { useEffect, useState } from 'react'
import { Item } from '../types';
import axios from 'axios';

const MyComponents = () => {
 const [data, setData] = useState<Item[]>([]);

 useEffect(()=>{
    axios.get('http://localhost:3031/items').
    then(res => setData(res.data)).
    catch(err => console.log(err))
 })

  return (


    <div>
        <table>
            <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
            </thead>
        

          <tbody>
            {data.map((d,i) => {
                return <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                </tr>
            })}
          </tbody>
          
        </table>
    </div>
  )
}

export default MyComponents