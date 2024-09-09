export async function singleProduct({ product }) {
    try {
      const result = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/singleProduct?id=${product}`, {
        
      });
  
      if (!result.ok) {
        throw new Error('There was an error while fetching single product');
      }
  
      const data = await result.json();
      return data.singleProduct || null;
    } catch (error) {
      console.error('Error fetching single product:', error);
      return null;
    }
}
  