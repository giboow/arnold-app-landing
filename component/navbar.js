import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar is-fixed-top has-background-primary" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <div className="is-uppercase is-bold is-size-4 columns is-mobile">
                    <div className="column is-3">
                    <figure className="image is-48x48 is-pulled-left">
                        <img  alt="" src="/ArnoldLogo.png"/>
                    </figure>
                    </div>
                    <div className="column">
                    <span>Arnold</span>
                    </div>
                </div>
            </a>

            {/*<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"*/}
            {/*   data-target="navbarBasicExample">*/}
            {/*    <span aria-hidden="true"></span>*/}
            {/*    <span aria-hidden="true"></span>*/}
            {/*    <span aria-hidden="true"></span>*/}
            {/*</a>*/}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <Link href="#contact-form">
                            <a className="button">
                                <strong>Nous suivre</strong>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar
