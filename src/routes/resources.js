// router
const resourceRouter = require("express").Router();

// utils
const checkFit = require('../utils/checkFit');

// route
resourceRouter.route("/").post((req, res) => {
  const { hostType, virtualMachines } = req.body;
  let currentHost = { ...hostType };
  if (virtualMachines.length === 0) {
    return 0;
  }
  let requiredHost = 1;
  for (let i = 0; i < virtualMachines.length; i++) {
    if(!checkFit(virtualMachines[i], hostType)) {
     continue;
    }
     if(!checkFit(virtualMachines[i], currentHost)) {
      currentHost = { ...hostType };
      requiredHost++;
     }
     for (props in currentHost) {
       currentHost[props] -= virtualMachines[i][props];
     }
  }
  res.json({
    message: "Success",
    requiredHost,
  });
});

module.exports = resourceRouter;
