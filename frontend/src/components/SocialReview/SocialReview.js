import React, { useState, useRef, useEffect } from 'react';
import './SocialReview.css';
import videoFile1 from '../../assets/images/6035535_Woman_People_1280x720.mp4'
import videoFile3 from '../../assets/images/1471869_People_1280x720.mp4'
import videoFile2 from '../../assets/images/9347912-uhd_2160_3840_24fps.mp4'
import videoFile4 from '../../assets/images/8811193-hd_1920_1080_25fps.mp4'



export default function SocialReview() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const reelRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        reelRef.current.classList.add('active');
        setStartX(e.pageX - reelRef.current.offsetLeft);
        setScrollLeft(reelRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        reelRef.current.classList.remove('active');
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        reelRef.current.classList.remove('active');
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - reelRef.current.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        reelRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const reelElement = reelRef.current;

        reelElement.addEventListener('mousedown', handleMouseDown);
        reelElement.addEventListener('mouseleave', handleMouseLeave);
        reelElement.addEventListener('mouseup', handleMouseUp);
        reelElement.addEventListener('mousemove', handleMouseMove);

        return () => {
            reelElement.removeEventListener('mousedown', handleMouseDown);
            reelElement.removeEventListener('mouseleave', handleMouseLeave);
            reelElement.removeEventListener('mouseup', handleMouseUp);
            reelElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div id="shopify-section-template--16897766424771__index_reel_HdFr9w" className="shopify-section video_url">
            <section className="reel_section section is-width-wide has-gutter-enabled custom_reel_section">
                <h2 className="main_heading text-center">#DekhoJi #ReelToReal</h2>
                <p className="reel-additional_heading text-center">Check out our Insta-worthy looks</p>
                <div className="container reel_video">
                    <div className="reelContainer page-width" ref={reelRef}>
                        {/* Desktop and Mobile Video/Thumbnail */}
                        {[{
                            videoSrc: videoFile1,
                            link: "/category/home-decor/Home",
                            imgSrc: "//cdn.shopify.com/s/files/1/0155/8131/files/Group_4929_2x_eb31182a-905c-4877-b5f5-1b5405086187.png?v=1664348845&width=150",
                            imgAlt: "Hot Sellers of Fabrics"
                        },
                        {
                            videoSrc: videoFile3,
                            link: "/category/women/Kurti",
                            imgSrc: "//cdn.shopify.com/s/files/1/0155/8131/files/Group_4929_2x_eb31182a-905c-4877-b5f5-1b5405086187.png?v=1664348845&width=150",
                            imgAlt: "Bandhani Sarees"
                        }, {
                            videoSrc: videoFile4,
                            link: "/category/women/Saree",
                            imgSrc: "//cdn.shopify.com/s/files/1/0155/8131/files/Group_4929_2x_eb31182a-905c-4877-b5f5-1b5405086187.png?v=1664348845&width=150",
                            imgAlt: "Hot Sellers of Fabrics"
                        }, ].map((item, index) => (
                            <div key={index} className={`column thumbnail has-gutter has-gutter--mobile list-collection__thumbnail medium-down--one-whole 'desktop' : 'mobile'} custom_reel`}>
                                <div className="product-wrap enable-zoom-true">
                                    <div className="thumbnail image__container has-image-crop">
                                        <div className="video_icon_wrapper">
                                            <video
                                                className="video"
                                                src={item.videoSrc}
                                                controls
                                                controlsList="nodownload"
                                                muted
                                                loading="lazy"
                                                loop
                                                playsInline
                                                preload="metadata"
                                                allowFullScreen
                                            />
                                            <div className="play_video">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                                                    <path id="Icon_ionic-ios-play-circle" data-name="Icon ionic-ios-play-circle" d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm5.892,14.9L14.245,24.11a.313.313,0,0,1-.471-.274V12.164a.312.312,0,0,1,.471-.274l9.647,5.836A.322.322,0,0,1,23.892,18.274Z" transform="translate(-3.375 -3.375)" fill="#fff" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img_btn">
                                    <a
                                        className="btn"
                                        href={item.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    );
}
