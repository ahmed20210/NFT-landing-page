import React from 'react'

function Header() {
  return (
    <div>
      <nav className='flex justify-between mb-5'>
        <div>logo</div>
        <ul className='flex gap-3'>
          <li>Home</li>
          <li>Feature</li>
          <li>Roadmap</li>
          <li>Token</li>
          <li>Contact Us</li>
        </ul>
        <ul className='flex gap-3'>
          <li>Log in</li>
          <li>Register here</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header