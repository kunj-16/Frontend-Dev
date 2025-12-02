class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Dataset cannot be empty.");
        }
        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce((sum, user) => sum + user.calories, 0);
        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user => 
            `${user.user} walked ${user.steps} steps and burned ${user.calories} calories.`
        );
    }
}

try {
    const workoutData = [
        { user: "A", steps: 8000, calories: 300 },
        { user: "B", steps: 12000, calories: 500 },
        { user: "C", steps: 4000, calories: 200 }
    ];

    const analytics = new FitnessAnalytics(workoutData);

    console.log("Active Users (>7000 steps):");
    console.log(analytics.getActiveUsers());

    console.log("\nAverage Calories Burned:");
    console.log(analytics.getAverageCalories());

    console.log("\nUser Summary:");
    console.log(analytics.getUserSummary());

} catch (error) {
    console.error("Error:", error.message);
}
