
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import { SearchBar } from '../elements/searchBar';
import '../styles/header.css'

function Header (){
    const {controlView, openDetailView, inactiveView} = useContext(MainContext);
	//console.log(SuperContext.openDetailView);

    

return(
<header id="header" className={`header-container ${inactiveView(controlView.home)}`}>
    <span className="header-arrow inactive">&lt;</span>
    <h1 className="header-title">API Movies</h1>
    

    <SearchBar/>
</header>)
}

export {Header}