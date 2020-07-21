import React from 'react';
function DisplayList(props) {
    const {itemsList,handleReset,handleDelete,handleEdit}=props;

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>

                {
                    itemsList.map((value) => (
                        <h5 key={value.id}>{value.item}
                        <button type='button' onClick={()=>handleDelete(value.id)}>Delete</button>
                            <button type='button' onClick={()=>handleEdit(value.id)}>Edit</button><br/>
                        </h5>
                    ))
                }

            <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default DisplayList;