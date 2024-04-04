import React from 'react'

function Header() {
  return (
      <html data-theme="dark">
          <div className="navbar bg-primary">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl font-bold text-slate-100" href='www.google.com'>Ahsan</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-slate-100 text-lg">
      <li><a>Projects</a></li>
      <li>
        <details>
          <summary>
            My Works
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none bg-slate-100">
            <li className='text-primary'><a>Posts</a></li>
            <li className='text-primary'><a>Articles</a></li>
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