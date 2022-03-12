import { useState } from "react"
// import ImageKit from "imagekit"

// Contenful
import { PlainClientAPI } from "contentful-management"
import { DialogExtensionSDK } from "@contentful/app-sdk"

// Styles
import * as S from "./styles"

// Components
import { TextInput, Button, Form, Paragraph } from "@contentful/f36-components"
import Note from "../Note"

// Types
import type { AppInstallationParameters } from "../ConfigScreen"

// Utils

// Interfaces
interface DialogProps {
  sdk: DialogExtensionSDK
  cma: PlainClientAPI
}

export interface AssetProps {
  src: string
  attributes: Record<string, any>
}

interface DialogState {
  // imgix: ImgixAPI;
  isOpen: boolean
  allSources: Array<SourceProps>
  selectedSource: Partial<SourceProps>
  page: PageProps
  verified: boolean // if API key is verified
  searchTerm?: string
  assets: AssetProps[]
  // errors: IxError[]; // array of IxErrors if any
  isSearching: boolean
}

export type PageProps = {
  currentIndex: number
  totalPageCount: number
}

export type SourceProps = {
  id: string
  name: string
  domain: string
}

type AppInvocationParameters = {
  selectedImage: string
}

/*








*/

const Dialog = (props: DialogProps) => {
  const installationParameters = props.sdk.parameters.installation as AppInstallationParameters
  const publicKey = installationParameters.imageKitPublicKey || ""
  const privateKey = installationParameters.imageKitPublicKey || ""
  const urlEndpoint = installationParameters.imageKitPublicKey || ""
  const verified = !!installationParameters.successfullyVerified

  // const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint })

  // State
  const [allSources, setAllSources] = useState<any[]>([])
  const [assets, setAssets] = useState<any[]>([])
  const [selectedSource, setSelectedSource] = useState<Record<string, any>>({})
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isVerified, setIsVerified] = useState<boolean>(verified)
  const [searchTerm, setsearchTerm] = useState<string>("")
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [errors, setErrors] = useState<any[]>([])
  const [page, setPage] = useState<{ current: number; total: number }>({ current: 0, total: 1 })

  // Helper Functions
  const searchOnClick = () => {}

  const debounceSearchOnClick = () => searchOnClick()

  const handlePageChange = () => {}

  const debounceHandlePageChange = () => handlePageChange()

  const resetNErrors = (n: number = 1) => setErrors(errors.slice(n))

  // Utils
  const sdk = props.sdk
  const selectedImage = (props.sdk.parameters.invocation as AppInvocationParameters)?.selectedImage

  return (
    <>
      <S.DialogHeaderContainer>
        <Paragraph marginBottom={"none"}>ImageKit Source:</Paragraph>
        <Button startIcon={<>X</>} variant="secondary" size="small" onClick={() => props.sdk.close(/* selected image */)} />
      </S.DialogHeaderContainer>

      <S.DialogBodyContainer>
        <div className="ix-sources">
          {selectedSource?.id && (
            <Form className="ix-searchForm">
              <TextInput
                type="search"
                className="ix-searchBar"
                placeholder="Search by name or folder path"
                value={searchTerm}
                onChange={e => setsearchTerm(e.target.value)}
              />
              <Button
                variant="secondary"
                className="ix-searchButton"
                // icon="Search"
                type="submit"
                onClick={debounceSearchOnClick}
              >
                Search
              </Button>
            </Form>
          )}
        </div>
        {/* <ImageGallery
          selectedSource={selectedSource}
          sdk={sdk}
          pageInfo={page}
          changePage={debounceHandlePageChange}
          assets={assets}
        /> */}
        <div>
          {assets.map(asset => (
            <pre key={asset}>{JSON.stringify(asset, null, 2)}</pre>
          ))}
        </div>

        {/* { UI Error fallback } */}
        {errors.length > 0 && <Note error={errors[0]} type={errors[0].type} resetErrorBoundary={resetNErrors} />}
      </S.DialogBodyContainer>
    </>
  )
}

export default Dialog
