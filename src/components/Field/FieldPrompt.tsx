import React from "react"
import { Button, Flex } from "@contentful/f36-components"

interface FieldPromptProps {
  openDialog: Function
  updateHeight: Function
}

const FieldPrompt: React.FC<FieldPromptProps> = ({ openDialog, updateHeight }) => {
  updateHeight(32 + 32 + 40 + 4)
  return (
    <Flex alignItems="center" justifyContent="center" fullHeight>
      <Button endIcon={<>+</>} onClick={() => openDialog()}>
        Add An Origin Image
      </Button>
    </Flex>
  )
}

export default FieldPrompt
