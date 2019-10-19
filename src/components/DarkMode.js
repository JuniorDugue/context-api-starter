import React from "react";

export default function DarkMode(props) {
  return (
    <label>
      {/* change input field to checkbox by adding checkbox type */}
      <input
        type="checkbox"
        value={props.value}
        // onChange={e => props.setValue(e.target.checked)}
        onChange={e => props.setValue(e.target.checked)}

      />
      <span>Dark Mode</span>
    </label>
  );
}
