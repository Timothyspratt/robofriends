import React from 'react';

const Card = ({ name, email, image, phrase }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${image}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <h5>{phrase}</h5>
                </div>
        </div>
    );
}

export default Card;