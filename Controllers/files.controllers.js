const FilesRouter = require("express").Router();
const fileSystem = require('fs');
const path = require("path");
const { getFileName } = require("../utils/calender");

FilesRouter.post('/createFile', function (req, res, next) {
  const { message } = req.body;
  const fileName = getFileName(new Date());
  const filePath = path.join(__dirname, '..', 'fileSystem', fileName);
  console.log(filePath);

  try {
    console.log(message);
    fileSystem.writeFileSync(filePath, message || "New File");
    return res.status(200).json({
      message: "File created Successfully!",
    });
  } catch (error) {
    return res.status(501).json({
      message: "Error in creating a file!",
    });
  }
});

module.exports = FilesRouter;
