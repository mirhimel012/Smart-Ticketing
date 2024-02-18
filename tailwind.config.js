/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }

// smooth scrolling
  document.getElementById('scrollToHere').addEventListener('click', function() {
    document.querySelector('#footer').scrollIntoView({
        behavior: 'smooth'
    });
});
