import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const Index = () => (<Layout>
    <Helmet>
        <title>STAR tracker</title>
    </Helmet>
    <h1 data-testid="index-title">Go to <Link to="/stars">STARs</Link></h1>
</Layout>);

export default Index;
