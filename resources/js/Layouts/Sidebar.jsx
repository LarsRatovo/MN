export default function Sidebar({children}) {
    return (
        <>
            <header>
                <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i&amp;display=swap"/>
                <link rel="stylesheet" href="/assets/fonts/fontawesome-all.min.css"/>
                <link rel="stylesheet" href="/assets/css/Dark-NavBar-Navigation-with-Button.css"/>
                <link rel="stylesheet" href="/assets/css/Dark-NavBar-Navigation-with-Search.css"/>
                <link rel="stylesheet" href="/assets/css/Dark-NavBar.css"/>
                <link rel="stylesheet" href="/assets/css/edit.css"/>
            </header>
            <div id="wrapper">
                <nav
                    className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0"
                    style={{paddingRight: "0px",marginRight: '0px'}}>
                    <div className="container-fluid d-flex flex-column p-0"><a
                        className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
                        href="/">
                        <div className="sidebar-brand-text mx-3"><span>MN</span></div>
                    </a>
                        <hr className="sidebar-divider my-0"/>
                            <ul className="navbar-nav text-light" id="accordionSidebar">
                                <li className="nav-item"><a className="nav-link" href="/"><i
                                    className="fas fa-truck"></i><span>Livraisons</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/report"><i
                                    className="fas fa-money-check-alt"></i><span>Compte rendu Global</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/report/deliver"><i
                                    className="fas fa-money-check-alt"></i><span>Compte rendu par livreur</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/spent"><i
                                    className="fas fa-money-check-alt"></i><span>Compte rendu des depenses</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/calendar"><i
                                    className="fas fa-calendar-alt"></i><span>Calendrier</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="/delivers"><i
                                    className="fas fa-user-tag"></i><span>Livreur</span>s</a></li>
                                <li className="nav-item"><a className="nav-link" href="/providers"><i
                                    className="fas fa-user-friends"></i><span>Fournisseur</span></a></li>
                            </ul>
                    </div>
                </nav>
                <div className="d-flex flex-column" id="content-wrapper">
                    <main>{children}</main>
                </div>
            </div>
            <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
            <script src="/assets/js/bs-init.js"></script>
            <script src="/assets/js/theme.js"></script>
        </>
    );
}
