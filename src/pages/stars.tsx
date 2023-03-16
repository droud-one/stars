import * as React from 'react';
import fb from '../firebase';
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Index = () => {
    const [data, setData] = React.useState<any[]>([]);
    
    if (data.length < 1) {
        fb.all('star').then(result => {
            result.forEach((doc) => setData([ ...data, { id: doc.id, info: doc.data() }] ));
        });
    }

    return (<Layout>
        <p>STARs:</p>
        {!data && <p>Loading...</p>}
        {data.map(({ id, info }) => <p key={id}>Name: {info.name}</p>)}
        <Box>
            <Masonry columns={4} spacing={2}>
                {[...Array(20).keys()].map((i) => (
                <Item key={i} sx={{ height: Math.floor(Math.random() * Math.random() * 250) + 40}}>
                    {i + 1}
                </Item>
                ))}
            </Masonry>
        </Box>
    </Layout>);
}

export default Index;
