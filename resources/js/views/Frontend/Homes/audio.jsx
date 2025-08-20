import MediaThemeTailwindAudio from 'player.style/tailwind-audio/react';
import YoutubeVideo from 'youtube-video-element/react';
import Layout from '../layout';

function Audio() {
    return (
        <Layout>
            <div className='container mx-auto grid grid-cols-2'>
                <img
                    className='h-[100px] w-[100px]'
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s"
                    alt=""
                />
                <div className=''>
                    <p>MediaThemeTailwindAudio</p>
                    <p>MediaThemeTailwindAudio</p>
                    <MediaThemeTailwindAudio style={{ width: "100%" }}>
                        <YoutubeVideo
                            slot="media"
                            src="https://www.youtube.com/watch?v=CFWMsp9I8MQ"
                            playsInline
                            crossOrigin="anonymous"
                        ></YoutubeVideo>
                    </MediaThemeTailwindAudio>
                </div>
            </div>
        </Layout>
    );
}
export default Audio;