import createRouter, {Router} from 'router5';
import loggerPlugin from 'router5/plugins/logger';
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
import routes from './routes';

export default function configureRouter(useListenersPlugin = false): Router {
    const router = createRouter(routes)
        .usePlugin(loggerPlugin)
        .usePlugin(browserPlugin({
            useHash: false
        }));

    if (useListenersPlugin) {
        router.usePlugin(listenersPlugin());
    }

    return router;
}
