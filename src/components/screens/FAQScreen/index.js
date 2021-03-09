import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../../foundation/Typography'
import {Box} from '../../foundation/layout/Box'
import {Grid} from '../../foundation/layout/Grid'
import Menu from '../../common/Menu'
import Footer from '../../common/Footer'
import Modal from '../../common/Modal'
import FormCadastro from '../../patterns/FormCadastro'

export default function FAQScreen({faqCategories}) {
  const [isModalOpen, setModalState] = React.useState(false)

  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false)
        }}
      >
        {(propsDoModal) => <FormCadastro propsDoModal={propsDoModal} />}
      </Modal>

      <Menu onCadastrarClick={() => setModalState(true)} />

      <Grid.Container style={{flex: 1}}>
        <Grid.Row
          marginTop={{xs: '32px', md: '100px'}}
          marginBottom={{xs: '32px', md: '100px'}}
          justifyContent="center"
        >
          <Grid.Col value={{xs: 12, md: 12}} flex={1}>
            <Typography
              variant="title"
              tag="h2"
              color="tertiary.main"
              textAlign="center"
            >
              Como podemos te ajudar?
            </Typography>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row alignItems="flex-start" justifyContent="center" flex="1">
          {faqCategories &&
            faqCategories.map((category) => (
              <Grid.Col value={{xs: 12, md: 3}} flex={1} key={category.title}>
                <Box width="100%">
                  <Typography
                    variant="subTitle"
                    tag="h2"
                    color="tertiary.main"
                    marginBottom="26px"
                  >
                    {category.title}
                  </Typography>

                  <Box as="ul" padding="0" listStyle="none">
                    {category.questions.map((question) => (
                      <li key={question.title}>
                        <Typography
                          href={`/faq/${question.slug}`}
                          variant="paragraph1"
                          tag="h2"
                          color="tertiary.light"
                        >
                          {question.title}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid.Col>
            ))}
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  )
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          slug: PropTypes.string,
          description: PropTypes.string,
        }),
      ),
    }),
  ).isRequired,
}
