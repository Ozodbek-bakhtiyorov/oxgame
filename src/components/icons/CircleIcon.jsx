import React from "react";

export default function CircleIcon({ color, size }) {
  return (
    <div
      className={`icon ${color ? "icon-" + color : "icon-blue"} ${
        size && "icon-" + size
      }`}
    >
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 94 94"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              d="M47,94C21.084,94,0,72.916,0,47S21.084,0,47,0s47,21.084,47,47S72.916,94,47,94z M47,12.186
          c-19.196,0-34.814,15.618-34.814,34.814c0,19.195,15.618,34.814,34.814,34.814c19.195,0,34.814-15.619,34.814-34.814
          C81.814,27.804,66.195,12.186,47,12.186z"
            />
          </g>
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
}
