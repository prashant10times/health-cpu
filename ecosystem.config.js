module.exports = {
    apps: [
      {
        name: 'health',
        script: 'dist/main.js',
        instances: 4,
        exec_mode: 'cluster',
        env: {
          NODE_ENV: 'development',
          PORT: 3000,
        }
      }
    ]
  }