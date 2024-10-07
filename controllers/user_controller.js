// import model(s)

export const signup = (req, res) => {
  try {
    // Signup logic
    const { email, password } = req.body;
    if(!email || !password) {
      return res.status(400).send("Email and password are required");
    }
    res.status(201).send("SignUp successfully");
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  try {
    // Login logic
    if(!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    if (email && password) {
      res.status(200).send("Login successful");
    } else {
      res.status(401).send("Login failed");
    }
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res) => {
  try {
    // Check if user is logged in
    if (user) {
      // log user out
      res.status(200).send("Logout successful");
    }
  } catch (error) {
    next(error);
  }
};
