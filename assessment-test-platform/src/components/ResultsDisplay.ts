export class ResultsDisplay {
    displayResults(results: any): void {
        // Assuming results is an object containing the necessary data
        const resultContainer = document.getElementById('results-container');
        if (resultContainer) {
            resultContainer.innerHTML = `
                <h2>Test Results</h2>
                <p>Score: ${results.score}</p>
                <p>Time Taken: ${results.timeTaken} seconds</p>
                <p>Correct Answers: ${results.correctAnswers}</p>
                <p>Incorrect Answers: ${results.incorrectAnswers}</p>
            `;
        }
    }
}