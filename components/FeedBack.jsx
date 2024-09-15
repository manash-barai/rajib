export default async function fetchFeedback() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/feed-back?page=1&limit=10`,
      {
        method: "GET",
        next: {
          revalidate: 60000, // Optional: Revalidate every 60 seconds
        },
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch feedback");
    }
  
    const feedbackData = await response.json();
    return feedbackData.feedBack;
}