# woven-demo
A service that returns number of required servers needed to implement list of virtual machines.


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