import React, { useState,useEffect } from 'react';


const initialForm = {
    name:"",
    constellation:"",
    id:null
}

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit})=>{
    const [form,setForm] = useState(initialForm);
    useEffect(()=>{
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    },[dataToEdit])

    const handlerChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    
    const handlerSubmit = (e)=>{
        e.preventDefault();

        if(!form.name || !form.constellation){
            alert("Datos incompletos");
            return;
        }

        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }

        handlerReset();
    }
    
    const handlerReset = (e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }
    
    return(
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" placeholder='name' onChange={handlerChange} value={form.name}/>
                <input type="text" name="constellation" placeholder='constellation' onChange={handlerChange} value={form.constellation}/>
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset" onClick={handlerReset}/>
            </form>
        </div>
    )
}

export default CrudForm;
