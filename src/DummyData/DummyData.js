
export const data = [
    {
      name: 'Jan',
      amt: 4000,
    },
    {
      name: 'Feb',
      amt: 2210,
    },
    {
      name: 'Mar',
      amt: 2290,
    },
    {
      name: 'Apr',
      amt: 2000,
    },
    {
      name: 'May',
      amt: 2181,
    },
    {
      name: 'June',
      amt: 2500,
    },
    {
      name: 'July',
      amt: 2100,
    },
  ];

  export const userDataColumns = [
    // {
    //   field: '_id',
    //   headerName: 'ID',
    //   minWidth: 95,
    //   flex: 1
    // },
      {
        field: 'username',
        headerName: 'Username',
        minWidth: 95,
        flex: 1
      },
      {
        field: 'email',
        headerName: 'Email',
        minWidth: 150,
        flex: 1
      },
      {
        field: 'accountType',
        headerName: 'Status',
        minWidth: 110,
        flex: 1
      },
  ]

  export const userDataRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,createdAT: "12/08/2000", status: "banned" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,createdAT: "12/08/2001", status: "unbanned" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,createdAT: "12/08/2002", status: "unbanned" } ,
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,createdAT: "12/08/2000", status: "banned"},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,createdAT: "12/08/2004", status: "unbanned"},
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 ,createdAT: "12/08/2000", status: "unbanned"},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 ,createdAT: "12/08/2030", status: "unbanned"},
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,createdAT: "12/08/2020", status: "unbanned"}
  ]