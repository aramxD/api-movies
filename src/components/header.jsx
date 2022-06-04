
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import { SearchBar } from '../elements/searchBar';
import '../styles/header.css'

function Header (){
    const SuperContext = useContext(MainContext);
	//console.log(SuperContext.openDetailView);
    const hiddeView = SuperContext.openDetailView
    
    let hide;
    if(hiddeView){
         hide = 'inactive'
    }else{
         hide = ''
    }


return(
<header id="header" className={`header-container ${hide}`}>
    <span className="header-arrow inactive">&lt;</span>
    <h1 className="header-title">API Movies</h1>
    <h1 className="header-title header-title--categoryView inactive">Acción</h1>

    <SearchBar/>
</header>)
}

export {Header}