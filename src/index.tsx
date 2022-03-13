import React from "react"
import { render } from "react-dom"

// Contenful SDK
import { createClient } from "contentful-management"
import { FieldExtensionSDK, DialogExtensionSDK, init, locations } from "@contentful/app-sdk"

// Styles
import { GlobalStyles } from "@contentful/f36-components"

// Components
import Field from "./components/Field"
import Dialog from "./components/Dialog"
import LocalhostWarning from "./components/LocalhostWarning"

// Types
import type { KnownSDK } from "@contentful/app-sdk"

/*








*/

if (process.env.NODE_ENV === "development" && window.self === window.top) {
  // You can remove this if block before deploying your app
  const root = document.getElementById("root")

  render(<LocalhostWarning />, root)
} else {
  init((sdk: KnownSDK) => {
    const root = document.getElementById("root")

    // Creating a CMA client allows you to use the contentful-management library
    // within your app. See the contentful-management documentation at https://contentful.github.io/contentful-management.js/contentful-management/latest/
    // to learn what is possible.
    const cma = createClient(
      { apiAdapter: sdk.cmaAdapter },
      {
        type: "plain",
        defaults: {
          environmentId: sdk.ids.environment,
          spaceId: sdk.ids.space,
        },
      }
    )

    const ComponentLocationSettings = [
      {
        location: locations.LOCATION_ENTRY_FIELD,
        component: <Field cma={cma} sdk={sdk as FieldExtensionSDK} />,
      },
      {
        location: locations.LOCATION_DIALOG,
        component: <Dialog cma={cma} sdk={sdk as DialogExtensionSDK} />,
      },
    ]

    // Select a component depending on a location in which the app is rendered.
    ComponentLocationSettings.forEach(componentLocationSetting => {
      if (sdk.location.is(componentLocationSetting.location)) {
        render(
          <>
            <GlobalStyles />
            {componentLocationSetting.component}
          </>,
          root
        )
      }
    })
  })
}
