import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import "./LaunchDetails.css";
import {Carousel} from "../Carousel/Carousel"; 

type Props = {
    data: LaunchInfoQuery,
}

export const LaunchDetails: React.FC<Props> = ({ data }) => {
    return (
        <div className="details-container">
            <div className="details">
                <div className="big-img">
                    <Carousel images={!!data && !!data.launch && !!data.launch.links && (data.launch.links.flickr_images)}/>
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{data?.launch?.mission_name}</h2>
                    </div>
                    <span>Launched in {data.launch?.launch_year} from {data.launch?.launch_site?.site_name}</span>
                    <p>Description: {data.launch?.details !== null ? data.launch?.details : "No Info Available"}</p>
                    <a href={!!data && !!data.launch && !!data.launch.links && data.launch.links.article_link !== null ? (data.launch.links.article_link) : ""} target="_blank" rel="noopener noreferrer"><button className="source">Source</button></a>
                </div>
            </div>
        </div>
    )
}
