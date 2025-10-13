import mtnLogo from '../assets/icons/company-logos/Mtn-logo.svg'
import payazaLogo from '../assets/icons/company-logos/Payaza-logo.svg'
import sebecclyLogo from '../assets/icons/company-logos/Sebeccly-logo.svg'
import wemaLogo from '../assets/icons/company-logos/Wema-logo.svg'


const InfiniteScroll = () => {
  const logos = [mtnLogo, payazaLogo, sebecclyLogo, wemaLogo];

return (
    <div className="infinite-scroll-wrapper">
      <div className="infinite-scroll-track">
        {[...logos, ...logos].map((logo, index) => (
          <img key={index} src={logo} alt="Logo" className="logo-item" />
        ))}
      </div>
    </div>
  );
};
 
export default InfiniteScroll;