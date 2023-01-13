export const shuffleAnswers = (questions) => {
    const unShuffleAnswers = [
        questions.correctAnswer,
        ...questions.incorrectAnswers
    ]

    return unShuffleAnswers.map(unShuffleAnswer => ({
        sort: Math.random(),
        value: unShuffleAnswer
    }))
        .sort((a, b) => a.sort - b.sort)
        .map(item => item.value)
}

export const normalizeQuestions = (backendQuestions) => {
     return backendQuestions.map(backendQuestion => {
         const incorrectAnswers = backendQuestion.incorrect_answers.map(incorrectAnswer => decodeURIComponent(incorrectAnswer))
         return {
             correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
             question: decodeURIComponent(backendQuestion.question),
             incorrectAnswers
         }
     })
}