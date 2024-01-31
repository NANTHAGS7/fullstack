import { Table, Button } from 'rsuite';
import CustomSideNav from './Sidenav';
import { Pagination } from 'rsuite';
import React from 'react';

const { Column, HeaderCell, Cell } = Table;
const mockUsers = (count) => {
    const users = [];
    for (let i = 1; i <= count; i++) {
      users.push({
        id: i,
        firstName: `First${i}`,
        lastName: `Last${i}`,
        gender: i % 2 === 0 ? 'Male' : 'Female',
        age: 20 + i,
        postcode: `1000${i}`,
        email: `user${i}@example.com`,
      });
    }
    return users;
  };
  
  const data = mockUsers(20);

const Tables = () => {
    const [activePage, setActivePage] = React.useState(5);

  return (
    <div>
    <div style={{}}>
        <div style={{marginLeft:'0px',position:'fixed'}}>
    <CustomSideNav/>
    </div>
    <div style={{marginLeft:'20%'}}>
    <Table
      height={400}
      data={data}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column width={60} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={150}>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={100}>
        <HeaderCell>Gender</HeaderCell>
        <Cell dataKey="gender" />
      </Column>

      <Column width={100}>
        <HeaderCell>Age</HeaderCell>
        <Cell dataKey="age" />
      </Column>

      <Column width={150}>
        <HeaderCell>Postcode</HeaderCell>
        <Cell dataKey="postcode" />
      </Column>

      <Column width={300}>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => alert(`id:${rowData.id}`)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
    <Pagination
        prev
        last
        next
        first
        size="lg"
        total={100}
        limit={7.5}
        activePage={activePage}
        onChangePage={setActivePage}
        style={{minWidth:'15rem'}}
      />

    </div>
    </div>
    </div>
  );
};


export default Tables;