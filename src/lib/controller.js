// This class is supposed to provide interface for a common way to respond to
// URLs.
export default class Controller {
    constructor(context) {
        this.context = context;
    }
    // index() is default action for a controller instance, it accepts four
    // arguments:
    // * application: reference to application that defined the route
    // * request: hapi request object
    // * reply: hapi reply object. Can be used as request as in reply.redirect()
    // * callback: Node style callback. If first parameter is null, the handler
    //             will proceed forward in the request/reply lifecycle.
    index(application, request, reply, callback) {
        callback(null);
    }
    // This is the method that will be called by the application framework
    // after the action method call back has been executed without erring.
    toString(callback) {
        callback(null, 'success');
    }
}
