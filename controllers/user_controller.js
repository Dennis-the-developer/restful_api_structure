// import model(s)

export const signup = (req, res, next) => {
  try {
    // Signup logic
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }
    res.status(201).send("SignUp successfully");
  } catch (error) {
    next(error);
  }
};

export const login = (req, res, next) => {
  try {
    // Login logic
    const { email, password } = req.body;
    if (!email || !password) {
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

export const logout = (req, res, next) => {
  try {
    // Check if user is logged in
    // log user out
    res.status(200).send("Logout successful");
  } catch (error) {
    next(error);
  }
};
