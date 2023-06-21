/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: "/api/svm",
        destination: "https://svm.brunonascimento.dev.br/validate",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/svm",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: 'Referrer-Policy', value: "strict-origin-when-cross-origin" },
          {
            key: "Access-Control-Allow-Methods", value: "POST",
          },
        ],
      },
    ]
  },
}
