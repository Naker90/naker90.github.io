import "./Content/styles/main-style.css";
import "./Content/styles/responsive-style.css";
import "./Content/styles/fullscreen-style.css";
import "./Content/styles/articles.css";
import "./Content/styles/normalize.css";
import "./Content/styles/hangman.css";
import 'highlight.js/styles/mono-blue.css';
import Highlight from 'highlight.js/lib/highlight';
import Javascript from 'highlight.js/lib/languages/javascript';
import CSharp from 'highlight.js/lib/languages/cs';
import * as RouterFactory from "./Router/RouterFactory";

function start(){
    Highlight.registerLanguage('javascript', Javascript);
    Highlight.registerLanguage('csharp', CSharp);
    Highlight.initHighlightingOnLoad();
    let routesResolver = RouterFactory.createRoutesResolver();
    routesResolver.init();
}

start();
