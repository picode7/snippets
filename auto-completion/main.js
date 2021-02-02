const tag = 'CPOS-'

const el = document.getElementById('content')
el.addEventListener('input', (e) => {
  if (!window.getSelection) return // not supported

  const selection = window.getSelection()
  if (!selection.getRangeAt || !selection.rangeCount || !selection.collapseToEnd) return // not supported

  if (e.data !== '@') return // only when this symbol is typed
  const range = selection.getRangeAt(0)
  range.deleteContents()
  range.insertNode(document.createTextNode(tag))
  selection.collapseToEnd()
})

// TODO: also trigger on Ctrl+Enter after an '@'
// TODO: auto complete if text starts with '@' and partial tag
// TODO: support multiple tags
// TODO: same functionality for `#` with multiple options
