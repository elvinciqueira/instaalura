import React from 'react'
import PropTypes from 'prop-types'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import Typography from '../../foundation/Typography'
import {useTheme} from '../../../infra/hooks/theme/useTheme'

export {getContent} from './getContent'

export default function AboutScreen({messages}) {
  const {currentMode} = useTheme()

  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <Grid.Container>
        <Grid.Row marginTop={{xs: '32px', md: '120px'}} flex="1">
          <Grid.Col value={{xs: 12, md: 6, lg: 6}} offset={{md: 2}} flex={1}>
            <Typography
              variant="title"
              tag="h2"
              color="tertiary.main"
              cmsKey="pageSobre.pageTitle"
            />

            <Box
              color={
                currentMode === 'light' ? 'tertiary.light' : 'tertiary.main'
              }
              dangerouslySetInnerHTML={{
                __html: messages.pageSobre.pageDescription,
              }}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </Box>
  )
}

AboutScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
}
