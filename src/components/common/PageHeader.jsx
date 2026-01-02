import React from 'react';
import '../index.css';

function PageHeader({ title, children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
      <h2 style={{ margin: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

export default PageHeader;
