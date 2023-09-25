// src/components/Dropdown.tsx

import React, { useState } from 'react';

type DropdownProps = {
  renderTrigger: (onClick: () => void, isOpen?: boolean, isHovered?: boolean) => React.ReactNode;
  renderContent: () => React.ReactNode;
};

const Dropdown: React.FC<DropdownProps> = ({ renderTrigger, renderContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {renderTrigger(toggleDropdown, isOpen)}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10 w-full h-full bg-transparent cursor-default"
            onClick={toggleDropdown}
          ></div>
          <div className="absolute right-0 mt-2 z-20 w-auto p-2 bg-slate-50 dark:bg-slate-900  rounded-lg shadow-lg">
            <div className="triangle-up -top-4 right-4 w-0 h-0 border-t-4 border-r-4 border-b-0 border-l-4 border-transparent"></div>
            {renderContent()}
          </div>
        </>
      )}
    </div>
  );
};

export default Dropdown;
