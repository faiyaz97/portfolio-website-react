import React from "react";
import "./Switch.css";

function Switch() {
  return (
    <>
      <div class="onoffswitch">
        <input
          type="checkbox"
          name="onoffswitch"
          class="onoffswitch-checkbox"
          id="myonoffswitch"
          tabindex="0"
        />
        <label class="onoffswitch-label" for="myonoffswitch">
          <span class="onoffswitch-inner"></span>
          <span class="onoffswitch-switch"></span>
        </label>
      </div>
    </>
  );
}

export default Switch;
