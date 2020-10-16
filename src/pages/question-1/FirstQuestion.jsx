import React from 'react'
import PropTypes from 'prop-types'
import { Typography, makeStyles, Container } from '@material-ui/core'

import QuestionContainer, {
    QuestionHead,
    QuestionTitle,
    QuestionBody,
} from '../../components/question-container/QuestionContainer'
import Background from '../../components/background/Background'
import SenyaAnimation from '../../animations/SenyaAnimation'
import QrAnimation from '../../animations/QrAnimation'

const useStyles = makeStyles({
    questionHead: {
        fontWeight: 'bold',
        textShadow: '2px 2px 0 #603cd2, 4px 4px 0 #000000;',
        color: '#ffffff',
        marginBottom: '10px'
    },
    questionText: {
        color: 'white',
        textAlign: 'justify',
        textShadow: '1px 1px 0 #000000;',
        marginBottom: '15px'
    },
    buttonRoot: {
        width: '100%',
    }
})

const text = 'Следующее задание ты найдёшь там, где находится обитель пенного и приют хрустящего в мирное время.'

const FirstQuestion = () => {

    const classes = useStyles()

    return (
        <Background color="#ff5656">
            <QuestionContainer>

                <QuestionHead>
                    <SenyaAnimation/>
                </QuestionHead>

                <QuestionTitle>
                    <Container>
                        <Typography variant="h3" className={classes.questionHead}>
                            Похомячим?
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

                <QuestionBody>
                    <Container style={{ height: '100px' }}>
                        <QrAnimation />
                    </Container>
                </QuestionBody>

            </QuestionContainer>
        </Background>
    )
}

export default FirstQuestion
