"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function layout(template) {
    return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
          <title>CRM Table Viewer</title>
          <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>
      </head>
      <body>
        ${template}
      </body>
      </html>
  `;
}
exports.default = layout;