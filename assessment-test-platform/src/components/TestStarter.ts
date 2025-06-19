export class TestStarter {
    private testLink: string;

    constructor(testLink: string) {
        this.testLink = testLink;
    }

    public startTest(): void {
        window.location.href = this.testLink;
    }
}