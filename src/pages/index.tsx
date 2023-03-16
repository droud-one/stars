import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Index = () => (<Layout><h1 data-testid="index-title">Go to <Link to="/stars">STARs</Link></h1></Layout>);

export default Index;
