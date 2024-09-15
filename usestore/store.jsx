import { create } from 'zustand';

export const useProductStore = create((set) => ({
  quantity: 1,
  products: [],
  feedBack: [],
  loading: false,
  featureProducts: [],

  increase: () =>
    set((state) => ({
      quantity: state.quantity < 5 ? state.quantity + 1 : state.quantity,
    })),
  decrease: () =>
    set((state) => ({
      quantity: state.quantity > 1 ? state.quantity - 1 : state.quantity,
    })),
    setValueZero: () =>
      set((state) => ({
        quantity: 1,
      })),

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/product?page=1&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      set({ products: data.products });
    } catch (error) {
      console.error('Error fetching products:', error.message);
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/product/?id=${productId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete the product');
      }
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    } finally {
      set({ loading: false });
    }
  },

  fetchFeedback: async () => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/feed-back?page=1&limit=10`);
      if (!response.ok) {
        throw new Error('Failed to fetch feedback');
      }
      const data = await response.json();
      set({ feedBack: data.feedBack });
    } catch (error) {
      console.error('Error fetching feedback:', error.message);
    } finally {
      set({ loading: false });
    }
  },

  deleteFeedback: async (feedbackId) => {
    set({ loading: true });
    try {
      const response = await fetch(`/api/feed-back?id=${feedbackId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete feedback');
      }
      set((state) => ({
        feedBack: state.feedBack.filter(
          (feedback) => feedback._id !== feedbackId
        ),
      }));
    } catch (error) {
      console.error('Error deleting feedback:', error.message);
    } finally {
      set({ loading: false });
    }
  },

  insertFeedback: (feed) => {
    set((state) => ({
      feedBack: [feed, ...state.feedBack],
    }));
    console.log('Feedback inserted:', feed);
  },

  

 
}));
