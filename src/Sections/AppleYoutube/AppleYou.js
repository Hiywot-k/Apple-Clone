import react, { useState, useEffect } from "react";
import "./AppleVideo.css"
// to get the a]le ID,  https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBzEei2R-c2mb0UpIXIMIYyX7L_3mkXdec&forUsername=Apple&part=id

// apple channle id =UCE_M8A5yxnLfW0KghEeajjw"

// to request a]le video data
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzEei2R-c2mb0UpIXIMIYyX7L_3mkXdec&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9

function AppleYou() {
  // to store and update the coming data
  const [AppleVideo, setAppleVideo] = useState([]);
  // to display the data when the page load we use useEffect
  useEffect(() => {
    // to get the data useing the link we sue fetch method(it sends http request to the server & return data)
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBzEei2R-c2mb0UpIXIMIYyX7L_3mkXdec&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9"
    )
      .then((res) => {
        // the response is a text that l[ks like jason so we need to change the text to jason
        return res.json();
      })
      .then((data) => {
        let videoData=data.items
        console.log(videoData);
        return setAppleVideo(data.items);
      });
     
  }, []);

  return (
    <section className="youtubeVideosWrapper">
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {/* b/c the data comes in an array we can use the map method to atterate similar data  */}
          {AppleVideo?.map((listVideo, i) => {
            let vidId = listVideo.id.videoId;
            // b/c every YT video start with https://www.youtube.com/watch?v=
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let VideoSection = (
              // KEY attribute =>when contet are created dynamically , giving key values to the elemets keeps it unique after the change .
              // i is to give it unique index for reach element when map creates an array from the data
              <div key={i} className="col-sm-12 col-md-4">
                <div className="VideoSection">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={listVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {listVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {listVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return VideoSection;
          })}
        </div>
      </div>
    </div>
    </section>
  );
}
export default AppleYou