import { dblClick } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDB = [
    {
        id:1,
        name:"Seiya",
        constellation:"Pegaso"
    },
    {
        id:2,
        name:"Shiryu",
        constellation:"Dragón"
    },
    {
        id:3,
        name:"Hyoga",
        constellation:"Cisne"
    },
    {
        id:4,
        name:"Shun",
        constellation:"Andrómeda"
    },
    {
        id:5,
        name:"Ikki",
        constellation:"Fénix"
    }
];


const CrudApp = ()=>{
    const [DB,setDB] = useState(initialDB);
    const [dataToEdit,setDataToEdit] = useState(null);
    
    const createData = (data)=>{
        data.id = Date.now();
        //console.log(data);
        setDB([...DB,data])
    }

    const updateData = (data)=>{
        let newData = DB.map(el => (el.id === data.id ?data :el))
        setDB(newData);
    }

    const deleteData = (id)=>{
        let isDelete = window.confirm(`¿Confirmas la eliminación del registro con id:${id}?`);

        if(isDelete){
            let newData = DB.filter(el => el.id !== id);
            setDB(newData);
        }else{
            return;
        }
    }

    return(
        <>
            <h2>CRUD App</h2>
            <article className='grid-1-2'>
                <CrudForm 
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}/>
                
                <CrudTable 
                data={DB}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}/>
            </article>
        </>
    )
}

export default CrudApp;