function analyzeFeedback() {
    // Feedback string
    let feedback = "Great product! Fast delivery and amazing sound quality!";

    // Count words using split()
    let words = feedback.split(" ");
    let wordCount = words.length;

    // Check if contains negative keywords using includes()
    let hasNegative = feedback.toLowerCase().includes("bad") ||
                      feedback.toLowerCase().includes("poor");

    let resultMsg = hasNegative ? "Needs Improvement" : "Positive Feedback";

    // Display results
    document.getElementById("feedbackResult").innerHTML = `
        Feedback: "${feedback}" <br>
        Total Words: ${wordCount} <br>
        Sentiment: <strong>${resultMsg}</strong>
    `;
}
