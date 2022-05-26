import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newitem, setNewItem, handleSubmit }) => {

  const inputRef = useRef();

  return (
    <form className='addForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input 
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder='Add Item'
        required
        value={newitem}
        onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
        type="submit"
        aria-label='Add Item'
        onClick={handleSubmit}
        >
            <FaPlus />
        </button>

    </form>

  )
}

export default AddItem