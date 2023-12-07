
var pathSettings = '/application/configs/application.json';

const request = (path) => {
    fetch(path)
    .then(response => response.json())
    .then(data => renderFiles(data))
    .catch(error => console.error('Erro ao buscar o arquivo:', error));
};

request(pathSettings);

const renderFiles = (data) => {

    // Meta Tags
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    document.head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.appendChild(metaViewport);

    const metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'Versão web do jornal GazetaMarista produzido nas dependências da escola Social Marista Ir. Acácio.');
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', 'escola, educação, notícias escolares, eventos acadêmicos, cultura, arte, esportes, atividades extracurriculares, alunos, professores, aprendizado, conquistas, projetos educacionais, comunidade escolar, entrevistas, eventos culturais, eventos esportivos, destaque acadêmico, escola social, marista, educação social, valores maristas, notícias educacionais, atividades comunitárias, ações sociais, responsabilidade social, inclusão, solidariedade, formação cidadã, voluntariado, desenvolvimento comunitário, valores humanos, cultura marista, aprendizado significativo, projetos sociais, educação inclusiva, eventos culturais maristas');
    document.head.appendChild(metaKeywords);

    const metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', 'Vitor Gabriel de Oliveira, Nathan Fabrício');
    document.head.appendChild(metaAuthor);

    const metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    metaRobots.setAttribute('content', 'index, follow');
    document.head.appendChild(metaRobots);

    const metaCacheControl = document.createElement('meta');
    metaCacheControl.setAttribute('http-equiv', 'cache-control');
    metaCacheControl.setAttribute('content', 'no-cache, no-store, must-revalidate');
    document.head.appendChild(metaCacheControl);

    const metaPragma = document.createElement('meta');
    metaPragma.setAttribute('http-equiv', 'pragma');
    metaPragma.setAttribute('content', 'no-cache');
    document.head.appendChild(metaPragma);

    const metaExpires = document.createElement('meta');
    metaExpires.setAttribute('http-equiv', 'expires');
    metaExpires.setAttribute('content', '0');
    document.head.appendChild(metaExpires);

    // Files Css
    const linkCSS = document.createElement('link');
    linkCSS.rel = 'stylesheet';
    linkCSS.type = 'text/css';
    linkCSS.href = data.css.app;
    document.head.appendChild(linkCSS);

    // Files Js
    const scriptJS = document.createElement('script');
    scriptJS.src = data.js.app;
    document.body.appendChild(scriptJS);

    // Logo Favicon
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/x-icon';
    faviconLink.href = data.favicon.file;
    document.head.appendChild(faviconLink);
  
    // Files Css
    const layoutCSS = document.createElement('link');
    layoutCSS.rel = 'stylesheet';
    layoutCSS.type = 'text/css';
    layoutCSS.href = `${data.layout.filename}${document.querySelector('title').getAttribute('data-html-filename')}.css`;
    document.head.appendChild(layoutCSS);

    const scriptFilenameJS = document.createElement('script');
    scriptFilenameJS.src = `${data.scripts.filename}${document.querySelector('title').getAttribute('data-html-filename')}.js`;
    document.body.appendChild(scriptFilenameJS);

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
    document.body.appendChild(scriptJS);

};