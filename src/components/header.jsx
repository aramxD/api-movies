
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
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

    <form id="searchForm" className="header-searchForm">
    <input type="text" placeholder="Search for movies" />
    <button>🔍</button>
    </form>
</header>)
}

export {Header}