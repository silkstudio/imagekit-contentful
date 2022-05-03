import React, { useEffect } from "react"
import ImageKit from "imagekit-media-library-widget"
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

// Contenful
import { PlainClientAPI } from "contentful-management"
import { DialogExtensionSDK } from "@contentful/app-sdk"

// Styles
import * as S from "./styles"

// Utils

// Interfaces
interface Props {
  sdk: DialogExtensionSDK
  cma: PlainClientAPI
}

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
)

/*








*/

const Dialog: React.FC<Props> = ({ sdk }) => {
  useEffect(() => {
    if (!document.querySelector("#ik-dialog-body > div > iframe")) {
      new ImageKit(
        {
          container: "#ik-dialog-body",
          view: "inline",
          renderOpenButton: false,
        },
        payload => {
          sdk.close(payload.data?.[0])
          console.log(JSON.stringify(payload, null, 2))
        }
      )
    }
  }, [sdk])

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <S.Dialog id="ik-dialog-body" />
    </ErrorBoundary>
  )
}

export default Dialog
