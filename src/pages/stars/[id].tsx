import React from 'react';
import { StarData } from '../../types';
import fb from '../../util/firebase';
import parser from '../../util/parser';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import type { PageProps } from 'gatsby';
import Layout from '../../components/Layout';
import { Helmet } from 'react-helmet';
import CommentForm from '../../components/CommentForm';

type StarProps = PageProps & {
    id: string,
};

export default function Stars(props: StarProps) {
    const starId = props.id;
    const [data, setData] = React.useState<StarData>();
    
    React.useEffect(() => {
        const onLoad = async (id: string) => {
          try {
            const star = await fb.get(`star/${id}`);
            setData(parser.star(star));
          } catch (error) {
            // TODO: Redirect back to Dash with error
            // onError(error);
          }
        };

        onLoad(starId);
    }, [starId]);

    return (<Layout>
        <Helmet>
            <title>{data ? data.name : 'STAR'}</title>
        </Helmet>
        {!data && <p>Loading...</p>}
        {data && <div>
            <h2>STAR: {data.name}</h2>

            <CommentForm submitHandler={console.log} />
            <List dense={true}>
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem disableGutters>
                    <ListItemText
                        primary="Commenter name"
                        secondary={
                            <>
                                <Typography sx={{ py: 1 }}>Comment comment comment comment comment comment comment comment comment</Typography>
                                <Typography variant="caption" display="block">11.03.2023 14:15</Typography>
                            </>
                        }
                    />
                </ListItem>
            </List>
        </div>
        }
    </Layout>);
};