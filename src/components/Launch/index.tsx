import React, { useState } from 'react';
import { Launch } from "./Launch";
import { useLaunchesHistoryQuery } from "../../generated/graphql";
import { Grid, Container, CircularProgress,Button, Typography } from "@material-ui/core";

export const LaunchHistoryContainer = () => {
    const [limit,setLimit] = useState(12)
    const { data, loading, error } = useLaunchesHistoryQuery({ variables: { "limit": limit } });

    if (loading) {
        return <div><CircularProgress /></div>
    }

    if (error || !data) {
        return <div>Error</div>
    }
    return (
        <div>
            <Container>
                <Typography variant="h4" style={{"marginTop":"50px","textAlign":"center"}}>List of Launches by SpaceX</Typography>
                <Grid container spacing={3}>
                    {!!data.launches && data.launches.map((launch,i) => (
                        !!launch && (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Launch data={launch} />
                            </Grid>
                        ))
                    )}
                </Grid>
                <Button color="primary" style={{"marginBottom":"10px","textAlign":"center"}} onClick={() => setLimit(limit + 4)}>Load More</Button>
            </Container>
        </div>
    )
}
