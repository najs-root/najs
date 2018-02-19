export declare const SchemaValidatorClass: string;
export declare const SystemClass: {
    HttpKernel: string;
    HttpDriver: string;
};
export declare const ContextualFacadeClass: {
    Input: string;
};
export declare const GlobalFacadeClass: {
    Application: string;
    Cache: string;
    Config: string;
    Event: string;
    Log: string;
    Path: string;
    Redis: string;
    Response: string;
    Route: string;
};
/**
 * This Object Configuration's key
 */
export declare const ConfigurationKeys: {
    Port: string;
    Host: string;
    ViewEngineName: string;
    HandlerBarsOptions: string;
    Redis: string;
    Paths: {
        app: string;
        config: string;
        layout: string;
        public: string;
        resource: string;
        route: string;
        storage: string;
        view: string;
    };
    Middleware: {
        csurfOptions: string;
        corsOptions: string;
    };
    Cache: {
        engine: string;
        redis: string;
    };
};
