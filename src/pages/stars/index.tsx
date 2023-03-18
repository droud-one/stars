import * as React from 'react';
import fb from '../../util/firebase';
import Layout from '../../components/Layout';
import { StarData } from '../../types';
import Star from '../../components/Star';
import Search from '../../components/Search';
import StarForm from '../../components/StarForm';
import parser from '../../util/parser';
import NoSsr from '@mui/base/NoSsr';
import Masonry from '@mui/lab/Masonry';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { Helmet } from 'react-helmet';

// TODO: Add alerts on successful submits

const Stars = () => {
    const [data, setData] = React.useState<StarData[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fb.all('star').then(result => {
            const parsed: StarData[] = [];

            result.forEach((d) => parsed.push(parser.star(d)));

            setData(parsed);
            setLoading(false);
        });
    }, []);

    return (<Layout>
        <Helmet>
            <title>STAR Dashbaord</title>
        </Helmet>
        <StarForm submitHandler={console.dir} />
        <Search searchHandler={console.info} sx={{ my: 2 }} />
        <NoSsr>
            <Box>
                <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                    {loading && [...Array(4).keys()].map((i: number) => <Skeleton variant="rectangular" animation="wave" height={200} key={i} />) }
                    {data.map((d) => <Star key={d.id} data={d}/>)}
                </Masonry>
            </Box>
        </NoSsr>
    </Layout>);
}

export default Stars;
