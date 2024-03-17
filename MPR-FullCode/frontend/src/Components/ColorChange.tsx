import React, { useState } from 'react';

const ColorSwitcher = () => {
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    { primaryColor: '#3498db', backgroundColor: '#ffffff', textColor: '#333333' },
    { primaryColor: '#FF6347', backgroundColor: '#ffffff', textColor: '#333333' },
    { primaryColor: '#ADFF2F', backgroundColor: '#ffffff', textColor: '#333333' },
    { primaryColor: '#DA70D6', backgroundColor: '#ffffff', textColor: '#333333' },
  ];

  const currentTheme = themes[themeIndex];

  const handleSwitchTheme = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % themes.length);
  };

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor, padding: '20px' }}>
      <button
        style={{
          backgroundColor: currentTheme.primaryColor,
          color: currentTheme.textColor,
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleSwitchTheme}
      >
        Switch Theme
      </button>

   
    </div>
  );
};

export default ColorSwitcher;   