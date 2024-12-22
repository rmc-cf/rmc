import Header from '@/components/custom/Header';
import SpecialColumnAside from '@/components/custom/news/SpecialColumnAside';
import React from 'react';

interface MainProps {
    children: React.ReactNode;  // 明确指定 children 的类型
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <>
             <Header />
                <div className='flex container mx-auto px-40 py-10'>
                    <SpecialColumnAside />
                    <div className='flex-1'>
                    {children}
                    </div>
                    <div>123</div>
                </div>
        </>
    );
};

export default Main;