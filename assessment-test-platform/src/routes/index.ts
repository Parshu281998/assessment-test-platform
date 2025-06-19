import { Router } from 'express';
import { TestStarter } from '../components/TestStarter';
import { ResultsDisplay } from '../components/ResultsDisplay';

const router = Router();
const testStarter = new TestStarter();
const resultsDisplay = new ResultsDisplay();

export function setRoutes(app) {
    router.post('/start-test', (req, res) => {
        const testLink = testStarter.startTest(req.body.studentId);
        res.json({ testLink });
    });

    router.post('/submit-results', (req, res) => {
        const results = req.body.results;
        resultsDisplay.displayResults(results);
        res.status(200).send('Results submitted successfully');
    });

    app.use('/api', router);
}