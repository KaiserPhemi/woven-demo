# woven-demo
A Server Planner Service that returns number of required servers needed to implement list of virtual machines.


## Description
- API implements the following operation (in UML definition): `+calculate(serverType: Server, virtualMachines: VirtualMachine[1..*]): int`
- All servers are of the same type. This type defines the hardware resources each server provides: **CPU**, **RAM**, **HDD**.
- Each virtual machine is defined by the virtual hardware resources it needs (on a server):  **CPU**, **RAM**, **HDD**.
- The algorithm for the virtual machine distribution should implement a 'first fit' strategy. 
- If a virtual machine is too 'big' for a new server, skip it
- The multiple `task_*` folders include the respective tasks as requested with `task_0` containing solutions to the on-call assessment.



## API
- Endpoints: 
  - *POST* `/resources`
  - Payload: 
  ```json
    {
      "hostType": {
          "CPU": 2,
          "RAM": 32,
          "HDD": 100
      },
      "virtualMachines": [
          {
              "CPU": 1,
              "RAM": 16,
              "HDD": 10
          },
          {
              "CPU": 1,
              "RAM": 16,
              "HDD": 20
          },
          {
              "CPU": 2,
              "RAM": 32,
              "HDD": 100
          },
          {
              "CPU": 1,
              "RAM": 16,
              "HDD": 50
          },
          {
              "CPU": 1,
              "RAM": 16,
              "HDD": 50
          }
      ]
    }
    ```
    - Response: 
    ```json
      {
        "message": "Success",
        "requiredHost": 3
      }
    ```



## Stack
- [NodeJS](https://nodejs.org/)
- [ExpressJS](https://expressjs.com/)
- [Cors](https://www.npmjs.com/package/cors)


## Installation
- Clone project
- Run `yarn install`;
- Run `yarn start`


## Test
- Run `yarn test`


## Author
- Oluwafemi Akinwa