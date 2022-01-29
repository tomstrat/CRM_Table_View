export default function layout(template: string): string {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="/css/style.css" />
          <title>CRM Table Viewer</title>
      </head>
      <body>
        ${template}
        <script type="text/javascript" src="/js/index.js"></script>
        <script type="text/javascript" src="/js/requests.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/ramda/0.25.0/ramda.min.js"></script>
      </body>
      </html>
  `
}