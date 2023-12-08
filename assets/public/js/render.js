const renderFiles = () => {

    // Files Css
    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.type = 'text/css';
    linkCSS.href = '../assets/public/css/app.css';
    document.head.appendChild(linkCSS);

    // Files Js
    const scriptJS = document.createElement('script');
    scriptJS.src = '../assets/public/js/app.js';
    scriptJS.defer = true;
    document.head.appendChild(scriptJS);

    // Logo Favicon
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/x-icon';
    faviconLink.href = '../assets/public/image/sys/favicon.ico';
    document.head.appendChild(faviconLink);
  
    // Files Css
    const layoutCSS = document.createElement('link');
    layoutCSS.rel = 'stylesheet';
    layoutCSS.type = 'text/css';
    layoutCSS.href = `../assets/public/css/layout/${document.querySelector('head').getAttribute('data-html-filename')}.css`;
    document.head.appendChild(layoutCSS);

    const scriptFilenameJS = document.createElement('script');
    scriptFilenameJS.src = `../assets/public/css/scripts/${document.querySelector('head').getAttribute('data-html-filename')}.js`;
    scriptFilenameJS.defer = true;
    document.head.appendChild(scriptFilenameJS);

    // Bootstrap
    const BootstrapCSS = document.createElement('link');
    BootstrapCSS.rel = 'stylesheet';
    BootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    BootstrapCSS.integrity = 'sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN';
    BootstrapCSS.crossOrigin = 'anonymous';
    document.head.appendChild(BootstrapCSS);

    const BootstrapJS = document.createElement('script');
    scriptJS.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    scriptJS.integrity = 'sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL';
    scriptJS.crossOrigin = 'anonymous';
    document.head.appendChild(scriptJS);

    const jquery = document.createElement('script');
    jquery.src = '../node_modules/jquery/dist/jquery.min.js';
    document.head.appendChild(jquery);
};

renderFiles();