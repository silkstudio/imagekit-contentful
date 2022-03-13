declare module "imagekit-media-library-widget" {
  interface ImageKitConfig {
    /*
     * The name of the container within which the Media Library will be rendered. Supports CSS selectors.
     */
    container: string | HTMLElement
    /*
     * Optional styling class to apply to the container element.
     */
    className?: string
    /*
     * Dimensions of the Media Library container element.
     */
    dimensions?: {
      height?: string
      width?: string
    }
    /*
     * Toggle Media Library interface mode: modal or inline (defaault = 'modal')
     */
    view?: "modal" | "inline"
    /*
     * Toggle whether button is rendered which opens the modal
     */
    renderOpenButton?: boolean
  }

  interface ImageKitCallbackPayload {
    eventType: string
    data?: Record<string, any>[]
    [key: string]: string
  }

  const ImageKit: new (config: ImageKitConfig, callback: (payload: ImageKitCallbackPayload) => any) => any

  export = ImageKit
}
