import {Box} from '../../foundation/layout/Box'
import {Button} from '../../common/Button'
import {Grid} from '../../foundation/layout/Grid'
import Typography from '../../foundation/Typography'
import TextField from '../../forms/TextField'
import {useTheme} from '../../../infra/hooks/theme/useTheme'
import {FiArrowRight} from 'react-icons/fi'

function FormContent() {
  return (
    <form style={{position: 'relative'}}>
      <TextField
        placeholder="URL da Imagem"
        type="url"
        name="image_url"
        fullWidth
      />
      <Button
        position="absolute"
        variant="secondary.main"
        type="submit"
        right="0"
        top="0"
        display="inline-flex"
        padding="12px 26px"
        justifyContent="center"
        alignItems="center"
      >
        <FiArrowRight size={20} />
      </Button>
    </form>
  )
}

export default function RecordImage({propsDoModal}) {
  const {currentMode} = useTheme()

  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="center"
      padding={{xs: '0', md: '32px 0'}}
    >
      <Grid.Col
        display="flex"
        paddingRight="0"
        paddingLeft="0"
        flex={1}
        value={{xs: 12, md: 6, lg: 4}}
      >
        <Box
          width="100%"
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          position="relative"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          borderRadius="10px"
          flex={1}
          padding={'75px 0 0 0'}
          backgroundColor={currentMode === 'light' ? '#fff' : '#181F22'}
          {...propsDoModal}
        >
          <propsDoModal.CloseButton />
          <Box width="100%" backgroundColor="#D4D4D4" flex={1} />

          <Box padding="32px">
            <FormContent />

            <Typography
              tag="p"
              variant="paragraph2"
              color="tertiary.light"
              textAlign="center"
            >
              Formatos suportados: jpg, png, svg e xpto
            </Typography>

            <Button marginTop="32px" fullWidth variant="primary.main">
              Avançar
            </Button>
          </Box>
        </Box>
      </Grid.Col>
    </Grid.Row>
  )
}
