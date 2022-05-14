import React, { useState } from 'react';

const CrudForm = ()=>{
    const [form,setForm] = useState({});

    const initialForm = {
        name:"",
        constellation:"",
        id:null
    }

    const handlerChange = (e)=>{

    }
    
    const handlerSubmit = (e)=>{

    }
    
    const handlerReset = (e)=>{

    }
    
    return(
        <>
            <h3>Agregar</h3>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" placeholder='name' onChange={handlerChange} value={form.name}/>
                <input type="text" name="constellation" placeholder='constellation' onChange={handlerChange} value={form.constellation}/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset" onClick={handlerReset}/>
            </form>
        </>
    )
}

export default CrudForm;
