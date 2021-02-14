// Wait for document to be created, should use a MutationObserver instead
let _ = Js.Global.setTimeout(() => {
  let document = Webapi.Dom.document
  let root = Webapi.Dom.Document.createElement("div", document)

  document
  ->Webapi.Dom.Document.asHtmlDocument
  ->Option.flatMap(Webapi.Dom.HtmlDocument.body)
  ->Option.forEach(Webapi.Dom.Element.appendChild(root))

  ReactDOM.render(<div> {React.string("Hello, world!")} </div>, root)
}, 1000)
