function template(title, initialState = {}, content = ""){  
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="/index.css">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                </div>
                <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="/bundle.js"></script>
              </body>
              </html>
              `;

  return page;
}

module.exports = template;
