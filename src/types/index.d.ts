import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    component: any,
    g: ElementAttrs<SVGAttributes>,
    path: ElementAttrs<SVGAttributes>,
  }
}
