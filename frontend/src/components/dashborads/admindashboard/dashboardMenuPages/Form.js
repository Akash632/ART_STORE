import React from 'react';

function Form({value,setValue,handleCreate,update,handleUpdate}) {
  return (
    <div className='admin-input-form-main-container'>
      <div className='admin-input-form-container'>
        <input type='text' placeholder='Enter your category' value={value} onChange={(e)=>setValue(e.target.value)}/>
        {
            update?(
                <button onClick={handleUpdate}>Update</button>
            )
            :(
                <button onClick={handleCreate}>Add</button>
            )
        }
      </div>
    </div>
  );
}

export default Form;
