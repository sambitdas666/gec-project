import React, { useState } from 'react';

function Nav() {
    const [scrolled, setScrolled] = React.useState(false);
    const [showSearch, setShowSearch] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 500);
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleCloseSearch = () => setShowSearch(false);
    const handleShowSearch = () => setShowSearch(true);

    return (
        <>
            <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "black-theme" : "white-theme"}`}>
                <div className='container-fluid d-flex justify-content-between align-items-center'>
                    <a href="#" className='logo navbar-brand'>Frost <span>Quest</span></a>
                    <div className='d-flex align-items-center'>
                        <i 
                            className='bi bi-search search-icon me-2' 
                            type='button' 
                            onClick={handleShowSearch}
                        ></i>
                        <button 
                            className='navbar-toggler' 
                            type='button' 
                            data-bs-toggle='collapse' 
                            data-bs-target='#navbarNav' 
                            aria-controls='navbarNav' 
                            aria-expanded='false' 
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className='navbar-nav align-items-center'>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Tour</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
            {/* Search Modal - React Controlled */}
            {showSearch && (
                <div className='modal show d-block' tabIndex='-1' style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <div className='modal-dialog modal-dialog-centered'>
                        <div className="modal-content bg-dark text-white">
                            <div className="modal-header border-0">
                                <h5 className="modal-title">Search</h5>
                                <button 
                                    type="button" 
                                    className="btn-close btn-close-white" 
                                    onClick={handleCloseSearch}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className='input-group modal-input'>
                                    <input 
                                        type="text" 
                                        className='form-control' 
                                        placeholder='Search here...' 
                                        autoFocus
                                    />
                                    <span className='input-group-text bg-white'>
                                        <i className="bi bi-search text-dark"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Nav;