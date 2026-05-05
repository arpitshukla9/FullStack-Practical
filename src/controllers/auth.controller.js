const DUMMY_USER = {
  username: 'admin',
  password: '1234'
};

export const login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    if (username === DUMMY_USER.username && password === DUMMY_USER.password) {
      req.session.user = {
        username: username
      };
      
      return res.status(200).json({ message: 'Login Successful' });
    } else {
      return res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Logout failed', error: err.message });
      }
      res.status(200).json({ message: 'Logged out successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Logout failed', error: error.message });
  }
};
