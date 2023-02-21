export function BaseOptions(name: string) {
    return (constructor: any) => {
        constructor.componentName = name;
    }
}
