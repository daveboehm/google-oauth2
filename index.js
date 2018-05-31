const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 5000

require('./services/passport')
require('./routes/auth-routes')(app)

app.listen(PORT)