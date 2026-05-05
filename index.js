import express from 'express';
import session from 'express-session';
import authRoute from './src/routes/auth.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'ARPIT_SECRET_KEY-1234567890',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  }
}));

app.use('/', authRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;