function checkAccess(req, res, next) {
  const user = req.params.user;
  const role = user.split('_').pop(); 

  if (role === "READ_WRITE") {
    next(); 
  } else {
    return res.status(403).json({ message: "Access Denied" });
  }
}
module.exports = checkAccess;
