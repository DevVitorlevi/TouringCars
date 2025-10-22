import React from 'react';
interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
    return <h2 className='font-semibold text-center text-4xl'>{text}</h2>;
};

export default Title;