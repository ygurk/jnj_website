import React from 'react';

/**
 * J&J Studios — Checkbox
 * Custom-styled checkbox + label, brand green when checked.
 */
export function Checkbox({ label, checked, defaultChecked, id, ...rest }) {
  const reactId = React.useId();
  const inputId = id || reactId;
  return (
    <label htmlFor={inputId} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-body)', lineHeight: 1.45 }}>
      <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', marginTop: '1px' }}>
        <input
          id={inputId}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          {...rest}
          style={{ position: 'absolute', opacity: 0, width: '20px', height: '20px', margin: 0, cursor: 'pointer' }}
        />
        <CheckBox checked={checked ?? defaultChecked} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}

function CheckBox({ checked }) {
  return (
    <span
      data-checked={checked ? 'true' : undefined}
      style={{
        width: '20px', height: '20px', borderRadius: 'var(--radius-sm)',
        border: '1.5px solid var(--border-strong)', background: 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background .12s ease, border-color .12s ease',
      }}
      className="jj-checkbox-box"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0 }} className="jj-checkbox-tick">
        <path d="M2.5 6.2l2.3 2.3L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <style>{`
        input:checked + .jj-checkbox-box { background: var(--green-600); border-color: var(--green-600); }
        input:checked + .jj-checkbox-box .jj-checkbox-tick { opacity: 1; }
        input:focus-visible + .jj-checkbox-box { box-shadow: var(--ring); }
      `}</style>
    </span>
  );
}
