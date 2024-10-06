import { Application, JSX, PageEvent, Reflection } from 'typedoc';

function setupArgument(app: Application) {
    // app.options.addDeclaration({
    //     name: 'test',
    //     default: false,
    // });
}

function header(origin: (props: PageEvent<Reflection>) => JSX.Element) {
    return function (props: PageEvent<Reflection>) {
        const header = origin(props);
        console.log(header);
        return header;
    };
}

function setupInjector(app: Application) {
    app.renderer.hooks.on('body.begin', (context) => {
        context.header = header(context.header);
        return JSX.createElement(JSX.Fragment, null);
    });
}

export function load(app: Application) {
    setupArgument(app);
    setupInjector(app);
}
