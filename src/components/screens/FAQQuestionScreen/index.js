import React from 'react'
import PropTypes from 'prop-types'
import {useTheme} from 'styled-components'
import {Grid} from '../../foundation/layout/Grid'
import {Box} from '../../foundation/layout/Box'
import Typography from '../../foundation/Typography'

export default function FAQQuestionScreen({category, question}) {
  const theme = useTheme()

  return (
    <Grid.Container
      flex="1"
      marginTop={{
        xs: '32px',
        md: '80px',
      }}
    >
      <Grid.Row
        flexDirection={{
          xs: 'column-reverse',
          md: 'row',
        }}
      >
        <Grid.Col offset={{sm: 0, lg: 1}} value={{xs: 12, md: 4, lg: 4}}>
          <Typography variant="title" color="tertiary.main" marginBottom="25px">
            Artigos
            <br />
            Relacionados
          </Typography>
          <Box
            as="ul"
            listStyle="none"
            padding="24px 30px"
            backgroundColor={theme.colors.modes[theme.mode].borders.main.color}
            borderRadiusTheme
          >
            {category.questions.map((currentQuestion) => (
              <Typography
                key={currentQuestion.slug}
                as="li"
                variant="paragraph2"
                href={`/${currentQuestion.slug}`}
                color="primary.main"
                marginBottom="16px"
              >
                {currentQuestion.title}
              </Typography>
            ))}
          </Box>
        </Grid.Col>

        <Grid.Col
          value={{lg: 6}}
          marginBottom={{
            xs: '50px',
            md: '0',
          }}
        >
          <Typography variant="title" color="tertiary.main">
            {question.title}
          </Typography>
          <Typography
            as="p"
            variant="paragraph1"
            color="tertiary.light"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: question.description}}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

FAQQuestionScreen.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      }),
    ),
  }).isRequired,
  question: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
}
