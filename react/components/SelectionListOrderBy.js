import React, { useState, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { useIntl } from 'react-intl'
import classNames from 'classnames'
// eslint-disable-next-line no-restricted-imports
import { find, propEq } from 'ramda'
import { formatIOMessage } from 'vtex.native-types'
import { IconCaret } from 'vtex.store-icons'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import useOutsideClick from '../hooks/useOutsideClick'
import styles from '../searchResult.css'
import SelectionListItemS from './SelectionListItemsS'

const CSS_HANDLES = [
  'orderByButton',
  'orderByOptionsContainer',
  'orderByDropdown',
  'orderByText',
  'filterPopupTitle',
  'filterPopupArrowIcon',
]

const SelectionListOrderBy = ({
  message = 'store/ordenation.sort-by',
  orderBy,
  options,
  showOrderTitle,
}) => {
  const intl = useIntl()
  const [showDropdown, setShowDropdown] = useState(true)
  const handles = useCssHandles(CSS_HANDLES)

  const orderByRef = useRef(null)

  const handleOutsideClick = useCallback(() => setShowDropdown(false), [])

  useOutsideClick(orderByRef, handleOutsideClick, showDropdown)

  const { isMobile } = useDevice()



  const renderOptions2 = (orderByOption) => {
    return options.map((option) => {
      if (option.value === 'OrderByTopSaleDESC' || option.value === 'OrderByBestDiscountDESC') {
        return null;
      }
      return (
        <SelectionListItemS
          key={option.value}
          onItemClick={handleOutsideClick}
          option={option}
          selected={option.value === orderByOption}
        />
      )
    })
  }

  const sortByMessage = formatIOMessage({ id: message, intl })

  const contentClass = classNames(
    styles.orderByOptionsContainer,
    'flex w-100'
  )

  const dropdownSort = classNames(
    handles.orderByDropdown,
    'relative pt1 justify-end w-100 w-auto-ns ml-auto flex'
  )

  return (
    <div className={dropdownSort} ref={orderByRef}>
      <span
        className={classNames(handles.orderByText, 'c-muted-2', {
          'dn dib-ns': !orderBy.length,
        })}
      >
        {sortByMessage}:
      </span>
      {
        // JSON.stringify(options)
      }

      <div className={contentClass}>{renderOptions2(orderBy)}</div>


    </div>
  )
}

SelectionListOrderBy.propTypes = {
  /** Current Ordernation  */
  orderBy: PropTypes.string,
  /** Sort Options */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Label to Option */
      label: PropTypes.string,
      /** Value to value */
      value: PropTypes.string,
    })
  ),
  /** Message to be displayed */
  message: PropTypes.string,
  /** Show or hide order title */
  showOrderTitle: PropTypes.bool,
}

export default SelectionListOrderBy
