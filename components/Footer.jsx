import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Your Company</h2>
            <p className="text-gray-400">
              Discover the best products with us. We offer a wide range of items to cater to all your needs.
            </p>
            <p className="mt-4 text-gray-400">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
  
          {/* Customer Service */}
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Service</h2>
            <ul>
              <li className="mb-2">
                <a href="/help" className="text-gray-400 hover:text-white">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-gray-400 hover:text-white">Returns</a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="text-gray-400 hover:text-white">Shipping</a>
              </li>
              <li className="mb-2">
                <a href="/faq" className="text-gray-400 hover:text-white">FAQs</a>
              </li>
            </ul>
          </div>
  
          {/* Newsletter Subscription & Social Media */}
          <div>
            <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
            <form>
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                type="email"
                id="newsletter"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-4 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .592 0 1.325v21.351C0 23.408.597 24 1.325 24H12.82v-9.294H9.692V11.15h3.128V8.414c0-3.1 1.892-4.788 4.655-4.788 1.323 0 2.459.1 2.79.142v3.235l-1.917.001c-1.504 0-1.794.715-1.794 1.764v2.313h3.59l-.467 3.556H15.55V24h7.125C23.403 24 24 23.408 24 22.676V1.325C24 .592 23.403 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.843 9.843 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.195 4.917 4.917 0 0 0-8.379 4.482 13.939 13.939 0 0 1-10.125-5.138 4.922 4.922 0 0 0 1.524 6.573 4.903 4.903 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.934 4.934 0 0 1-2.224.084 4.929 4.929 0 0 0 4.601 3.419 9.865 9.865 0 0 1-6.102 2.105c-.396 0-.788-.023-1.175-.069a13.905 13.905 0 0 0 7.557 2.213c9.054 0 14-7.496 14-13.986 0-.214-.005-.428-.014-.641A9.936 9.936 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-3.227 0-3.642.012-4.907.071-1.259.058-2.128.25-2.865.533a5.92 5.92 0 0 0-2.14 1.416c-.594.594-1.04 1.3-1.416 2.14-.284.737-.475 1.606-.533 2.865C.012 8.358 0 8.773 0 12c0 3.227.012 3.642.071 4.907.058 1.259.25 2.128.533 2.865.375.84.822 1.546 1.416 2.14.594.594 1.3 1.04 2.14 1.416.737.284 1.606.475 2.865.533C8.358 23.988 8.773 24 12 24c3.227 0 3.642-.012 4.907-.071 1.259-.058 2.128-.25 2.865-.533a5.92 5.92 0 0 0 2.14-1.416c.594-.594 1.04-1.3 1.416-2.14.284-.737.475-1.606.533-2.865.059-1.265.071-1.68.071-4.907s-.012-3.642-.071-4.907c-.058-1.259-.25-2.128-.533-2.865a5.92 5.92 0 0 0-1.416-2.14 5.92 5.92 0 0 0-2.14-1.416c-.737-.284-1.606-.475-2.865-.533C15.642.012 15.227 0 12 0zm0 5.838c1.431 0 1.608.006 2.174.032.566.026.955.115 1.24.247a2.92 2.92 0 0 1 1.081.712c.312.312.561.675.712 1.081.132.285.221.674.247 1.24.026.566.032.743.032 2.174s-.006 1.608-.032 2.174c-.026.566-.115.955-.247 1.24a2.92 2.92 0 0 1-.712 1.081c-.312.312-.675.561-1.081.712-.285.132-.674.221-1.24.247-.566.026-.743.032-2.174.032s-1.608-.006-2.174-.032c-.566-.026-.955-.115-1.24-.247a2.92 2.92 0 0 1-1.081-.712 2.92 2.92 0 0 1-.712-1.081c-.132-.285-.221-.674-.247-1.24-.026-.566-.032-.743-.032-2.174s.006-1.608.032-2.174c.026-.566.115-.955.247-1.24a2.92 2.92 0 0 1 .712-1.081 2.92 2.92 0 0 1 1.081-.712c.285-.132.674-.221 1.24-.247.566-.026.743-.032 2.174-.032zm0-3.675c-1.486 0-1.667.007-2.252.033-.586.026-.985.115-1.33.236a3.917 3.917 0 0 0-1.524.935 3.917 3.917 0 0 0-.935 1.524c-.121.345-.21.744-.236 1.33-.026.586-.033.767-.033 2.252s.007 1.667.033 2.252c.026.586.115.985.236 1.33a3.917 3.917 0 0 0 .935 1.524 3.917 3.917 0 0 0 1.524.935c.345.121.744.21 1.33.236.586.026.767.033 2.252.033s1.667-.007 2.252-.033c.586-.026.985-.115 1.33-.236a3.917 3.917 0 0 0 1.524-.935 3.917 3.917 0 0 0 .935-1.524c.121-.345.21-.744.236-1.33.026-.586.033-.767.033-2.252s-.007-1.667-.033-2.252c-.026-.586-.115-.985-.236-1.33a3.917 3.917 0 0 0-.935-1.524 3.917 3.917 0 0 0-1.524-.935c-.345-.121-.744-.21-1.33-.236-.586-.026-.767-.033-2.252-.033zm0 9.675a4.837 4.837 0 1 0 0-9.675 4.837 4.837 0 0 0 0 9.675zm0-7.914a3.077 3.077 0 1 1 0 6.154 3.077 3.077 0 0 1 0-6.154zm6.406-1.655a1.12 1.12 0 1 1 0-2.24 1.12 1.12 0 0 1 0 2.24z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

