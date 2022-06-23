import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { faCircleQuestion, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
	const navigate = useNavigate()

	const homePage = () => {
		navigate('/')
	}

	return (
		<div className="navbar">
			<div className="navContainer">
				<span className="logo" onClick={() => homePage()}>
					Sunday.com
				</span>
				<div className="navItems">
					<button className="listIcon">LAK</button>
					<button className="listIcon">
						<FontAwesomeIcon icon={faLanguage} />
					</button>
					<button className="listIcon">
						<FontAwesomeIcon icon={faCircleQuestion} />
					</button>

					<button className="listButton">List your Property</button>
					<button className="navButton">Register</button>
					<button className="navButton">Sign In</button>
				</div>
			</div>
		</div>
	)
}

export default Navbar
