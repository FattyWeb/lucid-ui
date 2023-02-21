import { SFCWithInstall } from './types';

// 安装
export const withInstall = <T, E extends Record<string, any>>(
    main: SFCWithInstall<T>,
    extra?: E
) => {
    main.install = (app): void => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            /**
                fixed issues #3 硬编码 待解决
                此处引用组件内
                @Options({
                  name: 'vs-option'
                })
                里的name @see vue-class-component/vue-class-component.esm-browser.js
                function Options(options) {
                    return Component => {
                        Component.__o = options; 此处
                        return Component;
                    };
                }
            */
            app.component(comp.__o.name, comp)
        }
    }

    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            (main as any)[key] = comp
        }
    }
    return main
}
