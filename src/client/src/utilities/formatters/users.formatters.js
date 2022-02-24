import * as R from "ramda"

export function formatUsers(data, omissions) {
  return R.map(obj => formatUser(obj, [
    "password",
    "roster", 
    "rosterMonday",
    "rosterTuesday",
    "rosterWednesday",
    "rosterThursday",
    "rosterFriday",
    "rosterSaturday",
    ...omissions
  ]), data)
}

export function formatUser(user, omissions) {

  return R.pipe(
    (userObject) => {
      userObject.rosterMonday = R.path(["roster", "monday"], userObject)
      userObject.rosterTuesday = R.path(["roster", "tuesday"], userObject)
      userObject.rosterWednesday = R.path(["roster", "wednesday"], userObject)
      userObject.rosterThursday = R.path(["roster", "thursday"], userObject)
      userObject.rosterFriday = R.path(["roster", "friday"], userObject)
      userObject.rosterSaturday = R.path(["roster", "saturday"], userObject)
      userObject.passwordConfirm = ""
      return userObject
    },
    (data) => {
      if(omissions) {
        return R.omit(omissions, data)
      }
      return data
    },
    R.evolve({
      certified: R.toString,
      injured: R.toString,
      joinDate: (date) => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString("en-GB")
      },
      employeeType: (types) => {
        if(!types) return []
        return types
      },
      location: (location) => {
        if(!location) return "Unspecified"
        return location
      },
      // employeeType: (types) => {
      //   if(types){
      //     return R.map(type => {
      //       return type[0] + type[1]
      //     }, types).join(", ")
      //   }},
      // role: (role) => {
      //   return role.charAt(0).toUpperCase() + role.slice(1)
      // },
      // contract: (contract) => {
      //   const uppercase = 
      //     contract.charAt(0)
      //       .toUpperCase() + contract.slice(1)
      //   return uppercase.replace(/([a-z])([A-Z])/g, "$1 $2")
      // },
    })
  )(user)
}