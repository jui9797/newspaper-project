import React from 'react';

const AdminHome = () => {
    return (
        <div className='my-10'>
            <h2>Admin home</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div className='border-2'>
                    <h3>Pie Chart</h3>
                </div>
                <div className='border-2'>
                    <h3>Rechart</h3>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;