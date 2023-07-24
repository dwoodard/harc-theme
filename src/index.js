import ComponentExample from "./scripts/ComponentExample/ComponentExample"
import React from "react"
import ReactDOM from "react-dom"

if (document.querySelector("#render-react-example-here")) {
    ReactDOM.render(<ComponentExample />, document.querySelector("#render-react-example-here"))
}
