export const generateTestLink = (testId: string): string => {
    return `${window.location.origin}/test/${testId}`;
};

export const validateStudentInfo = (studentInfo: { name: string; email: string }): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return studentInfo.name.trim() !== '' && emailPattern.test(studentInfo.email);
};