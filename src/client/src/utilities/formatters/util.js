

export function formatStaffName(name, delimiter) {
  return name.split(delimiter).map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.slice(1)
  }).join(" ")
}

