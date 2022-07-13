const newDate = new Date()
newDate.setHours(16, 30)
newDate.setDate(17)

const newDate2 = new Date()
newDate2.setHours(17, 45)

const newDate3 = new Date
newDate3.setHours(18, 0)

const testSheet = [{
  plannedStart: newDate,
  username: "test",
  route: "N1",
  routeType: "standard",
  opsMessage: "Test message, this one will be a much longer sentence",
},
{
  plannedStart: newDate,
  username: "password",
  route: "N1",
  routeType: "standard",
  opsMessage: "Test message, this one will be a much longer sentence",
}]

export default testSheet