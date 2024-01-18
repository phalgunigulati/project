import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar(){
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    return <nav className="nav">
        <a href="/" className="site-title a1"><i className="fa-brands fa-neos"></i>Daily Insider!</a>
        {/* <h1><i class="fa-brands fa-neos"></i> Daily Insider </h1> */}
        <ul>
            <li><a href="/about" className="a1 a2">About</a> </li>
            <li><a href="/news" className="a1 a3">News</a></li>
            {/* <li><a href="/contact" className="a1 a4">Contact</a></li> */}
            <li className="user">{ isAuthenticated && <p>{user.name}</p>}</li>
                    {
                        isAuthenticated ? (
                            <li><button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button></li>
                        ) : (
                            <li><button className="btn" onClick={() => loginWithRedirect()}>Log In</button></li>
                        )
                    }
        </ul>
    </nav>
}