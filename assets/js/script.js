const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return React.createElement(
        'nav',
        { className: 'bg-gray-800 text-white' },
        React.createElement(
            'div',
            { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
            React.createElement(
                'div',
                { className: 'flex items-center justify-between h-16' },
                React.createElement(
                    'div',
                    { className: 'flex items-center' },
                    React.createElement(
                        'a',
                        { href: '/', className: 'flex-shrink-0' },
                        React.createElement(
                            'span',
                            { className: 'text-xl font-bold' },
                            'Diego A. Diaz'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'hidden md:block' },
                    React.createElement(
                        'div',
                        { className: 'ml-10 flex items-baseline space-x-4' },
                        React.createElement(
                            'a',
                            { href: '/', className: 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700' },
                            'Home'
                        ),
                        React.createElement(
                            'a',
                            { href: '/about.html', className: 'px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700' },
                            'About'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'md:hidden' },
                    React.createElement(
                        'button',
                        {
                            onClick: toggleMenu,
                            className: 'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                        },
                        React.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Open main menu'
                        ),
                        isOpen
                            ? React.createElement(
                                'svg',
                                {
                                    className: 'block h-6 w-6',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    'aria-hidden': 'true'
                                },
                                React.createElement('path', {
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    strokeWidth: '2',
                                    d: 'M6 18L18 6M6 6l12 12'
                                })
                            )
                            : React.createElement(
                                'svg',
                                {
                                    className: 'block h-6 w-6',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    fill: 'none',
                                    viewBox: '0 0 24 24',
                                    stroke: 'currentColor',
                                    'aria-hidden': 'true'
                                },
                                React.createElement('path', {
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round',
                                    strokeWidth: '2',
                                    d: 'M4 6h16M4 12h16M4 18h16'
                                })
                            )
                    )
                )
            )
        ),
        isOpen && React.createElement(
            'div',
            { className: 'md:hidden' },
            React.createElement(
                'div',
                { className: 'px-2 pt-2 pb-3 space-y-1 sm:px-3' },
                React.createElement(
                    'a',
                    { href: '/', className: 'block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' },
                    'Home'
                ),
                React.createElement(
                    'a',
                    { href: '/about.html', className: 'block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700' },
                    'About'
                )
            )
        )
    );
};

// We're not calling ReactDOM.render here anymore