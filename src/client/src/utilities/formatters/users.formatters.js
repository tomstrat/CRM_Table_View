import * as R from "ramda"

export function formatUsers(data) {
  return R.map(obj => formatUser(obj, ["password", "roster"]), data)
}

export function formatUser(user, omissions) {
  return R.pipe(
    R.omit(omissions || ["password"]),
    R.evolve({
      certified: R.toString,
      injured: R.toString,
      joinDate: (date) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString("en-GB")
      },
      employeeType: (types) => {
        if(types){
          return R.map(type => {
            return type[0] + type[1]
          }, types).join(", ")
        }},
      role: (role) => {
        return role.charAt(0).toUpperCase() + role.slice(1)
      },
      contract: (contract) => {
        const uppercase = 
          contract.charAt(0)
            .toUpperCase() + contract.slice(1)
        return uppercase.replace(/([a-z])([A-Z])/g, "$1 $2")
      }
    }))(user)
}