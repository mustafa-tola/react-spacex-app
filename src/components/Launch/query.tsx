import gql from "graphql-tag";

const GET_LAUNCHES_HISTORY_QUERY = gql`
    query LaunchesHistory($limit:Int) {
        launches(limit:$limit) {
            mission_name
            links {
                flickr_images
                article_link
                mission_patch_small
            }
            launch_year
            details
            flight_number
        }
    }
`