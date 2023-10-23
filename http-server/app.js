const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PUBLIC_DIRECTORY = path.join(__dirname, "public");

function getHtml(page) {
    const htmlFilePath = path.join(PUBLIC_DIRECTORY, `${page}.html`);
    return fs.readFileSync(htmlFilePath, "utf-8");
}

function getJson(data) {
    return JSON.stringify(data)
}

function router() {
    const routes = {
        get: () => { },
        post: () => { },
    };
    const get = (path, cb) => {
        routes.get[path] = cb;
    };
    const post = (path, cb) => {
        routes.post[path] = cb;
    };
    return {
        get,
        post,
        routes,
    };
}

const appRouter = router()

appRouter.get("/", (req, res) => {
    const pageContent = getHtml('index')
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(pageContent)
})

appRouter.get("/search", (req, res) => {
    const pageContent = getHtml('search')
    res.setHeader("Content-Type", "text/html")
    res.writeHead(200)
    res.end(pageContent)
})

const server = () => {
    return (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        const { pathname } = parsedUrl;
        if (req.method === 'GET' && appRouter.routes.get[pathname]) {
            appRouter.routes.get[pathname](req, res);
        } else if (req.method === 'POST' &&
            appRouter.routes.post[pathname]) {
            appRouter.routes.post[pathname](req, res);
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.writeHead(404);
            res.end(getHtml('404'));
        }
    }
}

http.createServer(server()).listen(8000, 'localhost', () => {
    console.log(`Server is running. open http://localhost:${8000}`)
})
