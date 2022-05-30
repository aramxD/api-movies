
import '../styles/header.css'

function Header (){

return(
<header id="header" className="header-container">
    <span className="header-arrow inactive">&lt;</span>
    <h1 className="header-title">API Movies</h1>
    <h1 className="header-title header-title--categoryView inactive">Acción</h1>

    <form id="searchForm" className="header-searchForm">
    <input type="text" placeholder="Vengadores" />
    <button>🔍</button>
    </form>
</header>)
}

export {Header}