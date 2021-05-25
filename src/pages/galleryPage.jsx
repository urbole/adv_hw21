import Jupiter1 from '../assets/img/jupiter_1-min.jpg';
import Jupiter2 from '../assets/img/jupiter_2-min.jpg';
import Jupiter3 from '../assets/img/jupiter_3-min.jpg';
import Jupiter4 from '../assets/img/jupiter_4-min.png';
import Mimas from '../assets/img/mimas-min.jpg';
import Saturn1 from '../assets/img/saturn_rings-min.jpg';
import Saturn2 from '../assets/img/saturn_with_satellites-min.jpg';
import MercuryVsSun from '../assets/img/mercury_vs_sun-min.png';

export const GalleryPage = () => {
  return (
    <section className="gallery_page_content df f_w">
      <img src={MercuryVsSun} alt="Mercury in front of the sun" />
      <img src={Jupiter1} alt="storms on Jupiter" />
      <img src={Jupiter2} alt="storms on Jupiter" />
      <img src={Jupiter3} alt="storms on Jupiter" />
      <img src={Jupiter4} alt="storms on Jupiter" />
      <img src={Mimas} alt="Mimas is a moon of Saturn" />
      <img src={Saturn1} alt="Saturn rings" />
      <img src={Saturn2} alt="Saturn with satellites" />
    </section>
  )
}