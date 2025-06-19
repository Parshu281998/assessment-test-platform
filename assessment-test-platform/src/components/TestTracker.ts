class TestTracker {
    private tracking: boolean = false;

    constructor() {
        this.init();
    }

    private init() {
        window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
                this.trackTabSwitch();
            }
        });
    }

    public startTracking() {
        this.tracking = true;
    }

    public stopTracking() {
        this.tracking = false;
    }

    private trackTabSwitch() {
        if (this.tracking) {
            console.log('Tab switched at:', new Date().toISOString());
            // Additional logic to record the tab switch can be added here
        }
    }
}

export default TestTracker;