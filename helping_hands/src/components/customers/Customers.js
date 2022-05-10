import '../../resources/styles.css'

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
                <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{info.firstname}</h5>
                    <p class="card-text">{info.userstory}</p>
                    <p class="card-text"><small class="text-muted">{info.posttime}</small></p>
                    <a href="#" class="btn btn-primary">Read Full Story </a>
                    <button onClick={()=>handleDelete(info._id)}>Delete</button>

                </div>
                </div>
            )
    })

    return(
      <div>
          <h2>Wishers</h2>
          {displayCustomer}
      </div>
    )
}
export default Customers;
/*
                <ul>
                    <li>{info._id}</li>
                    <li>{info.firstname}</li>
                    <li>{info.lastname}</li>
                    <li>{info.userstory}</li>
                    <li>{info.posttime}</li>
                    <button onClick={()=>handleDelete(info._id)}>Delete</button>

                </ul>
*/