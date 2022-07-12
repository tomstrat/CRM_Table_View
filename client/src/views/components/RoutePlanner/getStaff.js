import axios from "axios"

const getStaff = async (staff, setStaff) => {
  if (!staff.length > 0) {
    const url = "/api/users"
    axios.get(url)
      .then(res => {
        const usersWithToggle = res.data.map((user)=> {
          return {...user, toggleState: false}
        })
        setStaff(usersWithToggle)
        //pointless line? 
        return res
      })
      .catch((err) => {
        console.log(err)
        return err
      })
  }
}
export default getStaff