// Page - Contact

import { useEffect } from "react";
import { appTitle } from "../globals/globals";

const PageContact = () => {
  useEffect(() => {
    document.title = `${appTitle} - Contact`;
  }, []);

  return (
    <>
      <h2 className="page-header">Contact Me</h2>
      <p>By email:</p>
      <ul className="email-info">
        <li>
          <a href="mailTo:sholmes47@bcit.ca">sholmes47@bcit.ca</a>
        </li>
        <li>
          <a href="mailTo:sholmes@gmail.com">shmglade@gmail.com</a>
        </li>
      </ul>
      <p>By phone:</p>
      <ul>
        <li>
          (236)978 8383
        </li>
      </ul>
    </>
  );
};

export default PageContact;