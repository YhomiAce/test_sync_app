module.exports = {
  apps : [{
    name: 'TEST API',
    script: 'app.js',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration
    instances: 1,
    autorestart: true,
    watch: true,
    ignore_watch: ["node_modules", "uploads"],
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};