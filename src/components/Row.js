import React, { useState } from 'react'
import PropTypes from 'prop-types'
import icons from '../assets/icons/index'

export default function Row({ element, icon, onDelete, toggleIsOpen }) {
  const [isHovering, setIsHovering] = useState(false)

  const iconDict = {
    // filetype: iconFileName
    'css': icons.CssFile(),
    'gitignore': icons.GitFile(),
    'js': icons.JsFile(),
    'json': icons.JsonFile(),
    'lock': icons.YarnFile(),
    'readme': icons.ReadmeFile(),
    'png': icons.ImageFile(),
    'arrowDown': icons.ArrowDown(),
    'arrowRight': icons.ArrowRight(),
    'default': icons.DefaultFile(),
    'delete': icons.X()
  }

  const getIconFromElem = () => {
    let iconKey = icon
    if (!icon) {
      // special case for README.md
      const fileType = (element.name === 'README.md') ? 'readme' : element.name.split('.').pop()
      iconKey = (fileType in iconDict) ? fileType : 'default'
    }
    return getImageIcon(iconKey)
  }

  const getImageIcon = (iconKey) => iconDict[iconKey]

  return (
    <div
      className={`row ${isHovering}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className='rowElem icon' onClick={toggleIsOpen}> {getIconFromElem()} </div>
      <div className='rowElem name'> {element.name} </div>
      {isHovering && (
        <div className='rowElem delete' onClick={() => onDelete(element.id)}>
          {getImageIcon('delete')}
        </div>
      )}
    </div>
  )
}

Row.defaultProps = {
  icon: null,
  toggleIsOpen: () => {},
}

Row.propTypes = {
  element: PropTypes.object.isRequired,
  icon: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  toggleIsOpen: PropTypes.func,
}
