import React from 'react';
import LoadingImage from '../globals/LoadingImage';
const image = [
    { id: 1, url: 'https://images.pexels.com/photos/2400843/pexels-photo-2400843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, url: 'https://images.pexels.com/photos/216216/pexels-photo-216216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 3, url: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 4, url: 'https://images.pexels.com/photos/242261/pexels-photo-242261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    { id: 5, url: 'https://images.pexels.com/photos/1855349/pexels-photo-1855349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
]
const Image = () => {
    return (
        <div>
            {
                image.map((item, index) => <LoadingImage imageUrl={item.url} key={item.id}/>)
            }
        </div>
    );
};

export default Image;