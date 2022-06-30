const Navbar = () => {
	const pressMenu = () => {
		const links = document.querySelector('.navlinks');
		let alinks = document.querySelectorAll('nav ul li');
		let bars = document.querySelector('.fa-bars');
		let close = document.querySelector('.fa-xmark');
		bars.style.display = 'none';
		close.style.display = 'block';
		links.classList.add('nactive');
		alinks.forEach((i) => (i.style.display = 'block'));
	};
	const pressClose = () => {
		const links = document.querySelector('.navlinks');
		let alinks = document.querySelectorAll('nav ul li');
		let bars = document.querySelector('.fa-bars');
		let close = document.querySelector('.fa-xmark');
		bars.style.display = 'block';
		close.style.display = 'none';
		links.classList.remove('nactive');
		alinks.forEach((i) => (i.style.display = 'none'));
	};

	return (
		<header>
			<nav>
				<h1>Dee's Estate</h1>
				<ul className="navlinks">
					<li className="active">
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#rent">Rent</a>
					</li>
					<li>
						<a href="#land">Land</a>
					</li>
					<li>
						<a href="#agent">Agent</a>
					</li>
					<li>
						<a href="#contact">Contact Us</a>
					</li>
				</ul>
				<button type="submit">Get Started</button>
				<i className="fas fa-bars fa-2x" onClick={pressMenu}></i>
				<i className="fas fa-xmark fa-2x" onClick={pressClose}></i>
			</nav>
		</header>
	);
};

export default Navbar;
