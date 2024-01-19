import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { PiGridFourFill } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-body-tertiary"
      data-bs-theme="dark"
      style={{ width: "4.5rem", height: "100vh" }}
    >
      <a
        href="/"
        className="d-block p-3 link-body-emphasis text-decoration-none"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <svg className="bi pe-none" width={40} height={32}>
          <IoHome />
        </svg>
        <span className="visually-hidden">Icon-only</span>
      </a>
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active py-3 border-bottom rounded-0"
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <svg
              className="bi pe-none"
              width={24}
              height={24}
              role="img"
              aria-label="Home"
            >
              <IoIosSpeedometer />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Dashboard"
            data-bs-original-title="Dashboard"
          >
            <svg
              className="bi pe-none"
              width={24}
              height={24}
              role="img"
              aria-label="Dashboard"
            >
              <FaCalendarAlt />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Orders"
            data-bs-original-title="Orders"
          >
            <svg
              className="bi pe-none"
              width={24}
              height={24}
              role="img"
              aria-label="Orders"
            >
              <PiGridFourFill />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Products"
            data-bs-original-title="Products"
          >
            <svg
              className="bi pe-none"
              width={24}
              height={24}
              role="img"
              aria-label="Products"
            >
              <GrUserManager />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Customers"
            data-bs-original-title="Customers"
          >
            <svg
              className="bi pe-none"
              width={24}
              height={24}
              role="img"
              aria-label="Customers"
            >
              <use xlinkHref="#people-circle" />
            </svg>
          </a>
        </li>
      </ul>
      <div className="dropdown border-top">
        <a
          href="#"
          className="d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width={24}
            height={24}
            className="rounded-circle"
          />
        </a>
        <ul className="dropdown-menu text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
