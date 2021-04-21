import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '../../foundation/layout/Box'
import Menu from '../../common/Menu'
import get from 'lodash/get'
import FormCadastro from '../../patterns/FormCadastro'
import RecordImage from '../../patterns/RecordImage'
import Footer from '../../common/Footer'
import SEO from '../../common/SEO'
import Modal from '../../common/Modal'

import {WebsitePageContext} from './context'

export {WebsitePageContext} from './context'

export default function WebsitePageWrapper({
  children,
  pageBoxProps,
  menuProps,
  footerProps,
  seoProps,
  messages,
}) {
  const [isModalOpen, setModalState] = React.useState(false)
  const [isModalRecordImageOpen, setModalRecordImageState] = React.useState(
    false,
  )

  const handleOnClose = () => setModalState(false)

  const toggleModalCadastro = () => setModalState(!isModalOpen)

  const toggleModalRecordImage = () =>
    setModalRecordImageState(!isModalRecordImageOpen)

  const getCMSContent = (cmsKey) => get(messages, cmsKey)

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro,
        toggleModalRecordImage,
        isModalRecordImageOpen,
        getCMSContent,
      }}
    >
      <SEO {...seoProps} />

      <Box flex={1} display="flex" flexDirection="column" {...pageBoxProps}>
        {menuProps.display && (
          <Menu onCadastrarClick={() => setModalState(true)} />
        )}

        <Modal isOpen={isModalOpen} onClose={handleOnClose}>
          {(propsDoModal) => <FormCadastro propsDoModal={propsDoModal} />}
        </Modal>

        <Modal isOpen={isModalRecordImageOpen} onClose={toggleModalRecordImage}>
          {(propsDoModal) => (
            <RecordImage
              propsDoModal={propsDoModal}
              onClose={toggleModalRecordImage}
            />
          )}
        </Modal>

        {children}

        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  )
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
  footerProps: {
    display: true,
  },
  messages: {},
}

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
}
