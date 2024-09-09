export async function products({page,limit}) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product?page=${page}&limit=limit`);
      
      if (!response.ok) {
        throw new Error('There was an error while fetching feedback');
      }
      
      const data = await response.json();
      return data.products || [];
    } catch (error) {
      console.error('Failed to fetch feedback:', error);
      return [];
    }
}