import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function SocialMedia() {
  return (
    <div className="fixed left-1  top-1/2 flex -translate-y-1/2 transform flex-col gap-10 ">
      {/* Social media icons */}
      <a
        href="#"
        className="flex  items-center justify-center rounded-full"
      >
            <FontAwesomeIcon
          icon={faTrash}
          className="fas fa-twitter"
          style={{ color: "red" }}
        ></FontAwesomeIcon>
      </a>
      <a
        href="#"
        className="flex  items-center justify-center rounded-full"
      >
            <FontAwesomeIcon
          icon={faTrash}
          className="fas fa-check"
          style={{ color: "red" }}
        ></FontAwesomeIcon>
      </a>
      <a
        href="#"
        className="flex  items-center justify-center rounded-full"
      >
        <FontAwesomeIcon
          icon={faTrash}
          className="fas fa-check"
          style={{ color: "red" }}
        ></FontAwesomeIcon>
      </a>
      <a
        href="#"
        className="flex items-center justify-center rounded-full"
      >
             <FontAwesomeIcon
          icon={faTrash}
          className="fas fa-check"
          style={{ color: "red" }}
        ></FontAwesomeIcon>
      </a>
    </div>
  );
}
