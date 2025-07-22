import { Link } from '@tanstack/react-router';
import './footer.css';

export default function Footer() {
    return (
        <div id='footerFooter'>
            <div id='footerInfoContainer'>
                <section id='footerSection1'>
                    <div id='footerLogo'>Logo Placeholder</div>
                    <div id='footerWebsiteName'>Tale Maker</div>
                    <div id='footerContactTitle'>Contact Us</div>
                    <form method='POST'>
                        <textarea id='footerContactName' placeholder='Your Full Name' rows={1} cols={30}></textarea>
                        <textarea id='footerContactEmail' placeholder='Your Email Address' rows={1} cols={30}></textarea>
                        <textarea id='footerContactMessage' placeholder='Your Message' rows={5} cols={30}></textarea>
                        <input type='submit' id='footerContactSubmit' />
                    </form>
                </section>
                <section id='footerSection2'>
                    <div id='footerSection2Column1'>
                        <div id='footerLinksTitle'>Links</div>
                        <Link to='/' id='footerLinks1' className='footerLinkOrFollow'>Home</Link>
                        <Link to='/generate-your-tale/genre' id='footerLinks2' className='footerLinkOrFollow'>Generate Your Tale</Link>
                        <Link to='/about-us' id='footerLinks3' className='footerLinkOrFollow'>About Us</Link>
                    </div>
                    <div id='footerSection2Column2'>
                        <div id='footerFollowTitle'>Follow</div>
                        <a href='' target='_blank' id='footerFollow1' className='footerLinkOrFollow'>Instagram</a>
                        <a href='' target='_blank' id='footerFollow2' className='footerLinkOrFollow'>YouTube</a>
                        <a href='' target='_blank' id='footerFollow3' className='footerLinkOrFollow'>LinkedIn</a>
                        <a href='' target='_blank' id='footerFollow4' className='footerLinkOrFollow'>Twitter/X</a>
                        <a href='' target='_blank' id='footerFollow5' className='footerLinkOrFollow'>Facebook</a>
                    </div>
                </section>
            </div>
        </div>
    )
}