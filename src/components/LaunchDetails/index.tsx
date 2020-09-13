import React from 'react'
import { LaunchDetails } from './LaunchDetails'
import { useParams } from 'react-router-dom'
import { useLaunchInfoQuery } from '../../generated/graphql';
import { CircularProgress } from '@material-ui/core';

export const LaunchDetailsContainer = () => {
    const { id } = useParams();
    const { data, loading, error } = useLaunchInfoQuery({ variables: { "id": id } });

    if (loading) {
        return <div><CircularProgress /></div>
    }

    if (error || !data) {
        return <div>Error: {error?.message}</div>
    }

    return (
        <div>
            <LaunchDetails data={data}/>
        </div>
    )
}
