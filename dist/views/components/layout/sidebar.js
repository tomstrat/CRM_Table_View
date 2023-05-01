"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sidebar(title, components, errors) {
    return (`
      <div class="sidebar">
        <div class="sidebar-title">
          <h2>${title}</h2>
        </div>
        <div class="sidebar-components">
            ${components({ errors })}
        </div>
      </div>
    `);
}
exports.default = sidebar;
