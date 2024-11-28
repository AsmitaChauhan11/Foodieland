import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ links, close }) {
  const user = localStorage.getItem("user_email");
  return (
    <div className="sidebarcomp" onClick={close}>
      {links.map((link) =>
        (user !== null && link.name === "Sign In") ||
        (user === null && link.name === "Profile") ? null : (
          <Link
            to={link.path}
            className="sidebar-link"
            key={link.name}
            onClick={close}
          >
            <FontAwesomeIcon icon={link.icon} />
            {link.name}
          </Link>
        )
      )}
    </div>
  );
}
