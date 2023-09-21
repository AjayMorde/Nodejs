const path = require('path');
const rootDir = require('../util/path'); // Make sure to define rootDir

exports.contactus = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'));
}
