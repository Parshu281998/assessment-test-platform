export interface StudentInfo {
    id: string;
    name: string;
    email: string;
}

export interface TestResults {
    studentId: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    timestamp: Date;
}