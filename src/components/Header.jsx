import react from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="headerLogo">
                <a href="/">
                    <img src="https://psfonttk.com/wp-content/uploads/2020/09/netflix-logo.png" alt="Netflix"></img>
                </a>
            </div>
            <div className="headerUser">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário"></img>
                </a>
            </div>
        </header>
    );
}