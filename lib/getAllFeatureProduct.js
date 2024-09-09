import React from 'react';

export async function getAllFeatureProduct() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/feature-product`);

        if (!response.ok) {
            throw new Error('There was an error while fetching feature products');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch feature products:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}
