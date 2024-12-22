import Header from '@/components/custom/Header';
import React from 'react';

interface MainProps {
  children: React.ReactNode;  // 明确指定 children 的类型
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container p-10">
        {children}
      </div>
    </>
  );
};

export default Main;