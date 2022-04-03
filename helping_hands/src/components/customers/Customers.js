const Customers = ({CustomersInfo, setCustomers, Cswitch, setSwitch})=>
{
    const handleDelete = async (userId)=>{
        try{
            const res =await fetch(`http://localhost:4500/users/${userId}`,{method:'DELETE'})

            if(res.status ===200){
                if(Cswitch ==='on'){
                    setSwitch('off')
                }else{
                    setSwitch('on')
                }
            }
        }catch(e){
            console.error(e)
        }
    }
    const displayCustomer = CustomersInfo.map(
        (info) => {
            return(
                <ul>
                    <li>{info._id}</li>
                    <li>{info.firstname}</li>
                    <li>{info.lastname}</li>
                    <li>{info.userstory}</li>
                    <li>{info.posttime}</li>
                    <button onClick={()=>handleDelete(info._id)}>Delete</button>

                </ul>
            )
    })

    return(
      <div>
          <h2>Customers</h2>
          {displayCustomer}
      </div>
    )
}
export default Customers;
