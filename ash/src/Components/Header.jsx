import React from 'react'

function Header() {
  return (
      <html data-theme="dark">
          <div className="navbar bg-indigo-800">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Ahsan Baseer</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-mytheme-neutral">
      <li><a>Projects</a></li>
      <li>
        <details>
          <summary>
            Services
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none bg-mytheme-accent">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </html>
  )
}

export default Header