import React from 'react';

const UserCard = ({user, avatarUrl}) => {
    const {name, email, phone, website,address,company} = user;
    const fullAddress = `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
    
    return (
        <div className='col-md-12 mb-4'>
            <div className='card h-100' style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '0' }}>
                <div className='d-flex flex-column justify-content-start'>
                    <div className='d-flex flex-row justify-content-start'>
                        <img
                            src={avatarUrl}
                            alt={`${name} avatar`}
                            className='m-3'
                            style={{ width: '200px', height: '200px' }}
                        />
                        <div className='text-left mt-3'>
                            <h5 className='card-title'>{name}</h5>
                            <p className='card-text'>
                                <strong>Email:</strong> {email}
                            </p>
                            <p className='card-text'>
                                <strong>Phone:</strong> {phone}
                            </p>
                            <p className='card-text'>
                                <strong>Website:</strong>
                                <a href={`https://${website}`} target="_blank" rel='noopener noreferrer' className='ml-1'>
                                    {website}
                                </a>
                            </p>
                            <p className='card-text'>
                                <strong>Address:</strong> {fullAddress}
                            </p>
                            <p className='card-text'>
                                <strong>Company:</strong> {company.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;