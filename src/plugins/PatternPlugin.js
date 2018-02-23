import React from 'react'

const PatternPlugin = () => ({
  renderNode (nodeProps) {
    const {
      attributes, node, children,
    } = nodeProps

    switch (node.type) {
      case 'examples_block':
        return <div className="pattern__examples--block" {...attributes}>{children}</div>
      case 'aside_block':
        return <div className={`pattern__${node.data.get('className')}--block`} {...attributes}>{children}</div>
      case 'examples_header':
        return <span className="pattern__examples--header" {...attributes}>{children}</span>
      case 'examples_subheader':
        return <span className="pattern__examples--subheader" {...attributes}>{children}</span>
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>
      case 'ol_list':
        return <ol {...attributes}>{children}</ol>
      case 'ul_list':
        return <ul {...attributes}>{children}</ul>
      case 'list_item':
        return <li {...attributes}>{children}</li>
      default:
        return null
    }
  },
})

export default PatternPlugin
