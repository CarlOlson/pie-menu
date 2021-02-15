open Webapi.Dom

let root = Document.createElement("div", document)

let _ = MutationObserver.make((_records, t) => {
  document
  ->Document.asHtmlDocument
  ->Option.flatMap(HtmlDocument.body)
  ->Option.map(Element.appendChild(root))
  ->Option.forEach(_ => MutationObserver.disconnect(t))
}) |> MutationObserver.observe(Document.asNode(document), {"childList": true})

ReactDOM.render(<div> {React.string("Hello, world!")} </div>, root)
