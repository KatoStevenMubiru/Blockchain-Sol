import React from 'react';
import {
 FacebookShareButton,
 FacebookIcon,
 TwitterShareButton,
 TwitterIcon,
 LinkedinShareButton,
 LinkedinIcon,
 WhatsappShareButton,
 WhatsappIcon,
 TumblrShareButton,
 TumblrIcon,
 PinterestShareButton,
 PinterestIcon,
 VKShareButton,
 VKIcon,
 OKShareButton,
 OKIcon,
 RedditShareButton,
 RedditIcon,
 EmailShareButton,
 EmailIcon,
 TelegramShareButton,
 TelegramIcon,
 ViberShareButton,
 ViberIcon,
 WorkplaceShareButton,
 WorkplaceIcon,
 
} from 'react-share';

   
const base64ToBlobUrl = (base64) => {
    const base64Data = base64.replace(/^data:image\/png;base64,/, '');
    const binaryString = window.atob(base64Data);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
     bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/png' });
    return URL.createObjectURL(blob);
   };
   
   

const Share = ({ imageData, textInput }) => {
 const url = window.location.href;
 const imageBlobUrl = base64ToBlobUrl(imageData);

 return (
 <div className="share-container">
    <div className="container">
  <FacebookShareButton url={url} quote={textInput} media={imageBlobUrl}>
    <FacebookIcon size={32} round />
  </FacebookShareButton>

  <TwitterShareButton url={url} title={textInput}>
    <TwitterIcon size={32} round />
  </TwitterShareButton>

  <LinkedinShareButton url={url}>
    <LinkedinIcon size={32} round />
  </LinkedinShareButton>

  {/* <InstagramShareButton url={url}>
    <InstagramIcon size={32} round />
  </InstagramShareButton> */}

  <WhatsappShareButton url={url} title={textInput}>
    <WhatsappIcon size={32} round />
  </WhatsappShareButton>

  <TumblrShareButton url={url} title={textInput}>
    <TumblrIcon size={32} round />
  </TumblrShareButton>

  <PinterestShareButton url={url} media={imageBlobUrl}>
    <PinterestIcon size={32} round />
  </PinterestShareButton>

  <VKShareButton url={url} title={textInput}>
    <VKIcon size={32} round />
  </VKShareButton>

  <OKShareButton url={url} title={textInput}>
    <OKIcon size={32} round />
  </OKShareButton>

  <RedditShareButton url={url} title={textInput}>
    <RedditIcon size={32} round />
  </RedditShareButton>

  <EmailShareButton url={url} subject={textInput} body={url}>
    <EmailIcon size={32} round />
  </EmailShareButton>

  <TelegramShareButton url={url}>
    <TelegramIcon size={32} round />
  </TelegramShareButton>

  <ViberShareButton url={url} title={textInput}>
    <ViberIcon size={32} round />
  </ViberShareButton>

  <WorkplaceShareButton url={url}>
    <WorkplaceIcon size={32} round />
  </WorkplaceShareButton>
  </div>
 </div>
 );
};

export default Share;
