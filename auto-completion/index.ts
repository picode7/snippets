const tag = '@CPOS-'

const el = document.getElementById('content')

el?.addEventListener('input', (ev) => {
  const e = ev as InputEvent

  if (e.data !== tag[0]) return // autocomplete when first symbol is typed

  window.getSelection()?.collapseToEnd() // stacks inserted data in undo-stack
  document.execCommand('insertText', false, tag.substr(1)) // inserts undo-able text
})

// TODO: also trigger on Ctrl+Space after an '@'
// TODO: auto complete if text starts with '@' and partial tag
// TODO: support multiple tags
