const
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    keys = require('../config/keys')

passport.use(new GoogleStrategy({
    clientID: keys.web.client_id,
    clientSecret: keys.web.client_secret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile) => {
    console.log('access', accessToken)
    console.log('refresh', refreshToken)
    console.log('profile', profile)
}))
