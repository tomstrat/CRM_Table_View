
export default function formatStaff(staff) {
  const formattedStaff = staff.map(user => {
    return {...user, toggleState: false}
  })

  return formattedStaff
}