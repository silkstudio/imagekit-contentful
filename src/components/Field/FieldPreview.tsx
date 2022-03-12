import { Button, Flex } from "@contentful/f36-components"

interface FieldImagePreviewProps {
  imagePath: string
  updateHeight: Function
  openDialog: Function
  clearSelection: Function
}

const FieldPreview: React.FC<FieldImagePreviewProps> = ({
  imagePath,
  openDialog,
  updateHeight,
  clearSelection,
}) => {
  updateHeight(311)
  return (
    <Flex>
      <div className="ix-field-image-preview-buttons">
        <Button
          className="ix-field-image-preview-buttons-replace"
          endIcon={<>+</>}
          onClick={() => openDialog()}
        >
          Replace
        </Button>
        <Button
          className="ix-field-image-preview-buttons-remove"
          endIcon={<>-</>}
          //   buttonType="negative"
          onClick={() => clearSelection()}
        >
          Remove
        </Button>
      </div>
    </Flex>
  )
}

export default FieldPreview
