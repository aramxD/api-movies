import React, { useContext } from "react";
import ReactDOM from "react-dom";
import logoTMDB from '../assets/ico/themoviedb.svg'
import "../styles/footer.css";

function Footer() {
	return ReactDOM.createPortal(
		<footer id="footer" className='footer'>
			<a href="http://juliosantacruz.dev" target="_blank">
				💼 Portfolio
			</a>
            
            <img src={logoTMDB} alt="" />
			
		</footer>,
		document.getElementById("footer")
	);
}

export { Footer };
