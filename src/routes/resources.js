const resourceRouter = require("express").Router();

// route
resourceRouter.route("/").post((req, res) => {
  const { hostType, virtualMachines } = req.body;
  const totalVMs = virtualMachines.length;
  let vmServers = [];

  for (let i = 0; i < totalVMs; i++) {
    let vMachines = [];
    for (props in hostType) {
      if (hostType[props] >= virtualMachines[i][props]) {
        vmServers.push({
          hostId: i + 1,
          vMs: vMachines.push(virtualMachines[i]),
        });
        hostType[props] -= virtualMachines[i][props];
      } else {
        continue;
      }
    }
  }

  res.json({
    message: "Created",
    servers: vmServers,
  });
});

module.exports = resourceRouter;
