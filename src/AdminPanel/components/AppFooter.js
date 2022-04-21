import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; طراحی و توسعه توسظ تیم </span>
        <a className='admin-panel-copyright' href="#" target="_blank" rel="noopener noreferrer">
        پژواک داده خزر
        </a>
      </div>

    </CFooter>
  )
}

export default React.memo(AppFooter)
