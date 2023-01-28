import { useState } from "react";
let data = [];

const NamesData = () => {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [tableData, setTableData] = useState(data);

  const onSubmitHandler = () => {
    let name = {
      firstName: firstName,
      lastName: lastName,
    };

    const names = [...tableData, name];
    setTableData(names);
  };

  return (
    <>
      <div className="flex justify-center ">
        <span>
          <div className="mt-10 flex">
            <input
              className="mr-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="fName"
              name="firstName"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="lName"
              name="lastName"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
            <button
              className="ml-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              type="button"
              onClick={onSubmitHandler}
            >
              Submit
            </button>
          </div>

          <div className="mt-5 flex flex-col">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr className="">
                  <th className="text-sm font-bold text-gray-900 px-6 py-4 text-left">First Name</th>
                  <th className="text-sm font-bold text-gray-900 px-6 py-4 text-left">Last Name</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((name) => (
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{name.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{name.lastName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </span>
      </div>
    </>
  );
};

export default NamesData;
