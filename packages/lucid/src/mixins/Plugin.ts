import {App} from "vue";

export default interface Plugin{
   install: (vue: App, ...options: any[]) => any
}
