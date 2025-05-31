import React, { useState } from 'react';

const ServicePackage = ({ title, price, children }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-3">
        <button
            className="btn btn-outline-dark w-100 d-flex justify-content-between align-items-center"
            onClick={() => setOpen(!open)}
            style={{ fontWeight: '600' }}
        >
            <span>{title}</span>
            <span style={{ fontSize: '1.5rem', lineHeight: '1' }}>
            {open ? '−' : '+'}
            </span>
        </button>

        {open && (
            <div className="mt-2 px-3 py-2 bg-light border rounded">
            {children}
            <p className="fw-bold mt-2">{price}</p>
            </div>
        )}
        </div>
    );
};

export default ServicePackage;
