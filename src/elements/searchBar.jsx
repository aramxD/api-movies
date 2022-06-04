import React, {useContext, useState} from "react";
import { MainContext } from "../context/mainContext";





function SearchBar() {
	const {MovieSearch, setNewSearchValue} = useContext(MainContext)
	
	
	const onChange = (event) => {
        setNewSearchValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
		setNewSearchValue(event.target.value)
		MovieSearch()
        //createTodo(newTodoValue)  <--- aqui va el codigo que envia la busqueda
		

        //setOpenModal(false) <--- Aqui va el codigo que abre la ventana
    }
    
	return (
		<form 
			id="searchForm" 
			className="header-searchForm"
			onSubmit={onSubmit}>
			<input 
				type="text" 
				placeholder="Search for movies"
				onChange={onChange} />
			<button>🔍</button>
		</form>
	);
}

export { SearchBar };
