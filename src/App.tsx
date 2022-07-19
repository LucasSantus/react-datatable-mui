import { Box } from '@mui/material';
import { DataTable } from './components/DataTable';
import GeneralCard from './components/GeneralCard';
import { userColumns } from './data/datatableColumns/userColumns';
import { User } from './types/User';

const users: () => User[] = () => [
  {
    name: 'Jubileu',
    email: 'jubileu@gmail.com',
  },
  {
    name: 'Irineu',
    email: 'irineu@gmail.com',
  },
  {
    name: 'Lucas',
    email: 'lucas@gmail.com',
  },
  {
    name: 'João',
    email: 'joao@gmail.com',
  },
  {
    name: 'Felipe',
    email: 'felipe@gmail.com',
  },
]

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <GeneralCard>
      <DataTable 
        columns={userColumns()}
        data={users()}
      />
    </GeneralCard>
    </Box>
    
  );
}

export default App;
