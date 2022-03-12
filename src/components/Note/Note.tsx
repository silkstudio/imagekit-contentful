import React from "react"

// Styles
import * as S from "./styles"
// import './Note.css';

// Components
import { Note, TextLink } from "@contentful/f36-components"

// Types

// Context / Redux

// Utils

// Interfaces
interface Props {
  type: "primary" | "positive" | "negative" | "warning"
  error: Error
  resetErrorBoundary: () => void
}

/*








*/

const IkNote: React.FC<Props> = props => {
  const { error, type, resetErrorBoundary } = props
  const [message, _link, ...rest] = error.message.split("$")
  const [link, title] = _link?.split("|") || ["", ""]
  const linkTitle = title?.length ? title : link

  return (
    <S.Container>
      <Note {...props}>
        {message + " "}
        <TextLink target="window" href={link}>
          {linkTitle}
        </TextLink>
        {" " + rest}
      </Note>
    </S.Container>
  )
}

export default IkNote
