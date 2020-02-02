var React = require('react');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Name', prop: 'name'  },
  { title: 'City', prop: 'city' },
  { title: 'Address', prop: 'address' },
  { title: 'Phone', prop: 'phone' }
];

var data = [
  { name: 'name value1', city: 'city value1', address: 'address value1', phone: 'phone value1' },
  { name: 'name value2', city: 'city value2', address: 'address value2', phone: 'phone value2' },
  { name: 'name value3', city: 'city value3', address: 'address value3', phone: 'phone value3' },
  { name: 'name value4', city: 'city value4', address: 'address value4', phone: 'phone value4' },
  { name: 'name value5', city: 'city value5', address: 'address value5', phone: 'phone value5' },
  { name: 'name value6', city: 'city value1', address: 'address value1', phone: 'phone value1' },
  { name: 'name value7', city: 'city value2', address: 'address value2', phone: 'phone value2' },
  { name: 'name value8', city: 'city value3', address: 'address value3', phone: 'phone value3' },
  { name: 'name value9', city: 'city value4', address: 'address value4', phone: 'phone value4' },
  { name: 'name value10', city: 'city value5', address: 'address value5', phone: 'phone value5' },
  { name: 'name value11', city: 'city value1', address: 'address value1', phone: 'phone value1' },
  { name: 'name value12', city: 'city value2', address: 'address value2', phone: 'phone value2' },
  { name: 'name value13', city: 'city value3', address: 'address value3', phone: 'phone value3' },
  { name: 'name value14', city: 'city value4', address: 'address value4', phone: 'phone value4' },
  { name: 'name value15', city: 'city value5', address: 'address value5', phone: 'phone value5' }

  // It also supports arrays
  // [ 'name value', 'city value', 'address value', 'phone value' ]
];

  
  function Pagination() {
    return (
      <div>
        <DataTable
      keys="name"
      columns={columns}
      initialData={data}
      initialPageLength={5}
      initialSortBy={{ prop: 'city', order: 'descending' }}
    />
      </div>
    )
  }
  
  export default Pagination
  