import React, { useState } from "react"
import { PlainClientAPI } from "contentful-management"
import { FieldExtensionSDK } from "@contentful/app-sdk"
import FieldPrompt from "./FieldPrompt"
import FieldPreview from "./FieldPreview"

interface FieldProps {
  sdk: FieldExtensionSDK
  cma: PlainClientAPI
}

const Field: React.FC<FieldProps> = props => {
  const storedValue = props.sdk.field.getValue()

  const [selectedAssetState, setSelectedAssetState] = useState<any>(
    storedValue || undefined
  )

  const openDialog = () => {
    props.sdk.dialogs
      .openCurrentApp({
        width: 1200,
        minHeight: 1200,
        position: "top",
        shouldCloseOnOverlayClick: true,
        allowHeightOverflow: true,
        parameters: {
          selectedImage: selectedAssetState,
        },
      })
      .then(selectedAsset => {
        setSelectedAssetState(selectedAsset)
        props.sdk.field.setValue(selectedAsset)
      })
  }

  const clearSelection = () => {
    selectedAssetState(undefined)
    props.sdk.field.setValue(undefined)
  }

  return (
    <div style={{ width: "100%", height: 150 }}>
      {selectedAssetState ? (
        <FieldPreview
          imagePath="/"
          updateHeight={() => {}}
          clearSelection={clearSelection}
          openDialog={() => {}}
        />
      ) : (
        <FieldPrompt openDialog={openDialog} updateHeight={() => {}} />
      )}
    </div>
  )
}

export default Field
