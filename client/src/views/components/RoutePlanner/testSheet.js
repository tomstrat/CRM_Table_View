const newDate = new Date()
newDate.setHours(16, 30)

const newDate2 = new Date()
newDate2.setHours(17, 45)

const newDate3 = new Date
newDate3.setHours(18, 0)

const testSheet = [{
  plannedStart: newDate,
  userId: 1,
  route: "N1",
  routeType: "standard",
  opsMessage: "Test message, this one will be a much longer sentence",
},
{
  plannedStart: newDate,
  userId: 2,
  route: "N1",
  routeType: "standard",
  opsMessage: "Test message, this one will be a much longer sentence",
},
{
  plannedStart: newDate2,
  userId: 3,
  route: "E1",
  routeType: "standard",
  opsMessage: "Test message, this one wil be shorter",
},
{
  plannedStart: newDate2,
  userId: 4,
  route: "E1",
  routeType: "standard",
  opsMessage: "Test message, this one will be shorter",
},
{
  plannedStart: newDate3,
  userId: 5,
  route: "S1",
  routeType: "standard",
  opsMessage: "Test message, tiny",
},
{
  plannedStart: newDate3,
  userId: 6,
  route: "S1",
  routeType: "standard",
  opsMessage: "Test message, tiny",
}]

export default testSheet