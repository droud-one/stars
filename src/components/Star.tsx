import React from 'react';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Paper';
import { Link as GLink } from 'gatsby';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import { StarData } from '../types';

// TODO: Fix the "| any" type
export default (props: { data: StarData } | any) => {
    const { data } = props;
    const commentCount = 7;

    return (<>
        <Card {...props}>
            <CardContent>
                <Typography color="text.secondary" sx={{ fontSize: '1.2em' }} display="inline">
                    <Link component={GLink} to={`${data.id}`} underline="none">{data.name}</Link>
                </Typography>
                <Chip label={commentCount} />
                <Typography>{data.action}</Typography>
            </CardContent>
        </Card>
    </>);
};