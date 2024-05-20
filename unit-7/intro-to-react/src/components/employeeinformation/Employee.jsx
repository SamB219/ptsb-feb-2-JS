
import EmployeeInfo from "./EmployeeInfo";

function Employee() {

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL" ,
            posistion: "Web Dev",
            food: "pizza"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY", 
            posistion: "Web Dev",
            food: "pizza"
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY" ,
            posistion: "Web Dev",
            food: "pizza"
        },
    ];

    return(
        <>
            <h1>Hello from Employees!</h1>
            {
                employeeRecords.map((record, index) => {
                    return(
                        <EmployeeInfo 
                        key={index}
                        name={record.name}
                        city={record.city}
                        state={record.state}
                        position={record.posistion}
                        food={record.food}
                        />
                    )
                })
            }
        </>
    )
}


export default Employee;