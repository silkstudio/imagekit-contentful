import React from "react"

import * as S from "./styles"

// Components
import { Button, Flex, AssetCard } from "@contentful/f36-components"

// Types
import type { ImageKitAsset } from "../../types/imagekit"

// Interfaces
interface FieldImagePreviewProps {
  asset: ImageKitAsset
  updateHeight: Function
  openDialog: Function
  clearSelection: Function
}

/*








*/

const FieldPreview: React.FC<FieldImagePreviewProps> = ({ asset, updateHeight, openDialog, clearSelection }) => {
  updateHeight(32 + 32 + 266.67 + 20 + 16 + 20 + 16 + 40 + 4)
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight gap="16px" flexDirection="column">
      <S.AssetContainer>
        <AssetCard
          src={asset.url}
          title={asset.name}
          type="image"
          status="published"
          className="ik-asset-card"
          onClick={() => openDialog()}
        />
      </S.AssetContainer>
      <em>{asset.filePath}</em>
      <Flex alignItems="center" justifyContent="center" fullHeight gap="8px">
        <Button endIcon={<>+</>} onClick={() => openDialog()}>
          Replace
        </Button>
        <Button endIcon={<>-</>} onClick={() => clearSelection()}>
          Remove
        </Button>
      </Flex>
    </Flex>
  )
}

export default FieldPreview
