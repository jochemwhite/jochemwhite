import React from 'react'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Search({ onChange }: Props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChange}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          width: '300px',
          fontSize: '16px',
          color: '#333',
        }}
      />
    </div>
  )
}
