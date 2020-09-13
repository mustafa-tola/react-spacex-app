import gql from "graphql-tag";

const GET_LAUNCH_DETAIL_QUERY = gql`
  query LaunchInfo($id:String) {
    launch(id:$id) {
      mission_name
      launch_year
      details
      launch_site {
        site_name
      }
      links {
        video_link
        flickr_images
        article_link
      }
    }
  }
`