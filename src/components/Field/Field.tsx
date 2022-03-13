import React, { useState } from "react"

// Contenful
import { PlainClientAPI } from "contentful-management"
import { FieldExtensionSDK } from "@contentful/app-sdk"

// Styles
import * as S from "./styles"

// Components
import FieldPrompt from "./FieldPrompt"
import FieldPreview from "./FieldPreview"

// Types
import type { ImageKitAsset } from "../../types/imagekit"

// Utils
import { ErrorBoundary, FallbackProps } from "react-error-boundary"

const ErrorFallback: React.FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
)

// Interfaces
interface FieldProps {
  sdk: FieldExtensionSDK
  cma: PlainClientAPI
}

/*








*/

const Field: React.FC<FieldProps> = props => {
  const storedValue = props.sdk.field.getValue()

  const [selectedAssetState, setSelectedAssetState] = useState<ImageKitAsset | undefined>(storedValue || undefined)

  const openDialog = () => {
    props.sdk.dialogs
      .openCurrentApp({
        width: 1200,
        minHeight: 800,
        position: "top",
        shouldCloseOnOverlayClick: true,
        allowHeightOverflow: true,
        parameters: {
          selectedImage: selectedAssetState,
        },
      })
      .then((selectedAsset: ImageKitAsset) => {
        console.log(selectedAsset)
        setSelectedAssetState(selectedAsset)
        props.sdk.field.setValue(selectedAsset)
      })
  }

  const clearSelection = () => {
    setSelectedAssetState(undefined)
    props.sdk.field.setValue(undefined)
  }

  const updateHeightHandler = props.sdk.window.updateHeight

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <S.FieldContainer>
        {selectedAssetState ? (
          <FieldPreview
            asset={selectedAssetState}
            updateHeight={updateHeightHandler}
            clearSelection={clearSelection}
            openDialog={openDialog}
          />
        ) : (
          <FieldPrompt openDialog={openDialog} updateHeight={updateHeightHandler} />
        )}
      </S.FieldContainer>
    </ErrorBoundary>
  )
}

export default Field
