/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/svm",
        destination: "http://localhost:5000/validate",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/svm",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: 'Referrer-Policy', value: "strict-origin-when-cross-origin"},
          { key: "Access-Control-Allow-Methods", value: "GET,POST",
          },
        ],
      },
    ]
  },
}
