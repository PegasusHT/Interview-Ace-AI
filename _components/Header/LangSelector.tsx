import React, { useState } from 'react';

const LangSelector: React.FC= ()  => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [language, setLanguage] = useState('EN');
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const selectLanguage = (lang: string) => {
      setLanguage(lang);
      setDropdownVisible(false);
    };

    return(
        <div className="relative">
            <button
            className=" px-2 py-1 rounded-lg flex items-center justify-center"
            onClick={toggleDropdown}
            >
            {language}
            <svg className={`ml-1 w-4 h-4 transition-transform ${dropdownVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
            </button>
            {dropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg">
                <button className="block w-full text-left p-2 hover:bg-green-100" onClick={() => selectLanguage('EN')}>EN</button>
                <button className="block w-full text-left p-2 hover:bg-green-100" onClick={() => selectLanguage('VN')}>VN</button>
            </div>
            )}
        </div>
    )
}

export default LangSelector;