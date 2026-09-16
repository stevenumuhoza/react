import reactLogo from "./assets/react.svg"

export default function Header() {
    return (
        <header className="heading">
            <img 
                src={reactLogo} 
                width="40px" 
                alt="React logo" 
                className="image1" 
            />

            <nav className="navigation">
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}