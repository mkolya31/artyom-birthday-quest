import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Typography, makeStyles, Container, Button } from '@material-ui/core'

import QuestionContainer, {
    QuestionHead,
    QuestionTitle,
    QuestionBody,
    QuestionActions
} from '../../components/question-container/QuestionContainer'
import HelloAnimation from '../../animations/HelloAnimation'
import Background from '../../components/background/Background'

const useStyles = makeStyles({
    questionHead: {
        fontWeight: 'bold',
        textShadow: '2px 2px 0 #4100c1, 4px 4px 0 #000000;',
        color: '#61dbc1',
        marginBottom: '10px'
    },
    questionText: {
        color: 'darkblue',
        textAlign: 'justify'
    },
    buttonRoot: {
        width: '100%',
    }
})

const text = 'Привет. Это игра. Правила просты: я даю задание, выполняешь - переходишь к новому заданию. А зачем это тебе? ' +
    'Ответ в конце!'

const WelcomePage = (props) => {

    const { history } = props
    const classes = useStyles()

    const handleButtonOnClick = () => {
        return history.push('/question-1/')
    }

    return (
        <Background color="yellow">
            <QuestionContainer>

                <QuestionHead>
                    <HelloAnimation/>
                </QuestionHead>

                <QuestionTitle>
                    <Container>
                        <Typography variant="h2" className={classes.questionHead}>
                            На старт!
                        </Typography>
                    </Container>
                </QuestionTitle>

                <QuestionBody>
                    <Container className={classes.questionText}>
                        <Typography variant="h6">
                            {text}
                        </Typography>
                    </Container>
                </QuestionBody>

                <QuestionActions>
                    <Button
                        className={classes.buttonRoot}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={handleButtonOnClick}
                    >
                        Погнали!
                    </Button>
                </QuestionActions>

            </QuestionContainer>
        </Background>
    )
}

WelcomePage.propTypes = {
    //prop from withRouter hoc
    history: PropTypes.shape({
        push: PropTypes.func
    })
}

export default withRouter(WelcomePage)
