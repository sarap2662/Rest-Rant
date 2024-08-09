import React from "react";

interface IDefProps {
  children: React.ReactNode;
}

const Def: React.FC<IDefProps> = ({ children }) => (
  <html>
    <head>
      <title>Title</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      />
      <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/places">Places</a>
          </li>
          <li>
            <a href="/places/new">Add Place</a>
          </li>
        </ul>
      </nav>
      {children}
    </body>
  </html>
);

export default Def;
