import React from 'react';
import Menu from './Menu';
import '../style.css';

const Layout = ({
    title = 'Title',
    description = 'Description',
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron pt-3 mb-4">
            <h2 className="p-4">{title}</h2>
            <p className="lead p-2">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;