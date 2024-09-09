export async function customareFeedback() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/feed-back`);
      
      if (!response.ok) {
        throw new Error('There was an error while fetching feedback');
      }
      
      const data = await response.json();
      return data.feedBack || [];
    } catch (error) {
      console.error('Failed to fetch feedback:', error);
      return [];
    }
  }