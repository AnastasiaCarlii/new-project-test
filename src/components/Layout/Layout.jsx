import React, { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rates">Rates</Link>
            </li>
          </ul>
        </nav>
      </header>
      <maim>
        <Suspense fallback={<p>Loading</p>}>
          <Outlet />
        </Suspense>
      </maim>
    </>
  );
};
