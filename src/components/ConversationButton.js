import React from 'react'
import PropTypes from 'prop-types'
import ToolbarButton from './ToolbarButton'

const conversationStrategy = (change, data) => {
  const firstBlock = change.value.startBlock
  if (firstBlock) {
    const itemBlock = change.value.document.getClosestBlock(firstBlock.key)
    if (itemBlock && itemBlock.type === 'list_item') {
      return change.setNodeByKey(itemBlock.key, { data })
    }
  }
  return change
}

const ConversationButton = ({
  icon, title, value, onChange, data,
}) => {
  return (<ToolbarButton
    icon={icon}
    text={title}
    title={title}
    onMouseDown={() => { return onChange(conversationStrategy(value.change(), data)) }}
  />)
}

ConversationButton.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export default ConversationButton
