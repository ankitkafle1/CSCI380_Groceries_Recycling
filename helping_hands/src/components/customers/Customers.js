
const Customers = ({CustomersInfo})=>
{
    const displayCustomer = CustomersInfo.map(
        (info) => {
            return(
                <ul>
                    <li>{info.id}</li>
                    <li>{info.firstName}</li>
                    <li>{info.lastName}</li>
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

