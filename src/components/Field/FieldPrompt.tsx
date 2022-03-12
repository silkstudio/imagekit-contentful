import React from "react"
import { ReactElement } from "react"
import { Button, Flex } from "@contentful/f36-components"

interface FieldPromptProps {
  openDialog: Function
  updateHeight: Function
}

const FieldPrompt = ({
  openDialog,
  updateHeight,
}: FieldPromptProps): ReactElement => {
  updateHeight(150)
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Button
        className="ix-add-image-button"
        endIcon={<>+</>}
        onClick={() => openDialog()}
      >
        Add An Origin Image
      </Button>
    </Flex>
  )
}

export default FieldPrompt
