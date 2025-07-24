import { Link } from '@tanstack/react-router';
import { useRef } from 'react';
import './footer.css';

export default function Footer() {
    const contactNameTextbox = useRef<HTMLTextAreaElement | null>(null);
    const contactEmailTextbox = useRef<HTMLTextAreaElement | null>(null);
    const contactMessageTextbox = useRef<HTMLTextAreaElement | null>(null);
    const contactSubmitButton = useRef<HTMLButtonElement | null>(null);
    const checkContactName = () => {
        const nameRegEx = /.{3,}/i;
        if (contactNameTextbox.current !== null && nameRegEx.test(contactNameTextbox.current.value)) {
            contactNameTextbox.current.style.borderColor = 'green';
        } else {
            if (contactNameTextbox.current !== null) {
                contactNameTextbox.current.style.borderColor = 'red';
            }
        }
        styleSubmitButton();
    }
    const checkContactEmail = () => {
        const emailRegEx = /[A-Za-z0-9._+\-]{1,}@[A-Za-z0-9._+\-]{1,}\.[a-z]{2,}/i;
        if (contactEmailTextbox.current !== null && emailRegEx.test(contactEmailTextbox.current.value)) {
            contactEmailTextbox.current.style.borderColor = 'green';
        } else {
            if (contactEmailTextbox.current !== null) {
                contactEmailTextbox.current.style.borderColor = 'red';
            }
        }
        styleSubmitButton();
    }
    const checkContactMessage = () => {
        const messageRegEx = /.{8,}/i;
        if (contactMessageTextbox.current !== null && messageRegEx.test(contactMessageTextbox.current.value)) {
            contactMessageTextbox.current.style.borderColor = 'green';
        } else {
            if (contactMessageTextbox.current !== null) {
                contactMessageTextbox.current.style.borderColor = 'red';
            }
        }
        styleSubmitButton();
    }
    const styleSubmitButton = () => {
        if (contactNameTextbox.current && contactEmailTextbox.current && contactMessageTextbox.current && contactSubmitButton.current) {
            if (contactNameTextbox.current.style.borderColor === 'green' && contactEmailTextbox.current.style.borderColor === 'green' && contactMessageTextbox.current.style.borderColor === 'green') {
                contactSubmitButton.current.style.borderColor = 'green';
                contactSubmitButton.current.style.pointerEvents = 'auto';
            } else {
                contactSubmitButton.current.style.borderColor = 'red';
                contactSubmitButton.current.style.pointerEvents = 'none';
            }
        }
    }
    return (
        <div id='footerFooter'>
            <div id='footerInfoContainer'>
                <section id='footerSection1'>
                    <div id='footerLogo'>Logo Placeholder</div>
                    <div id='footerWebsiteName'>Tale Maker</div>
                    <div id='footerContactTitle'>Contact Us</div>
                    <form action='https://api.web3forms.com/submit' method='POST'>
                        <input type='hidden' name='access_key' value='05d2ed2d-9389-43e1-91dd-fdf90709a0c7' />
                        <textarea onChange={() => checkContactName()} id='footerContactName' ref={contactNameTextbox} placeholder='Your Full Name' name='fullName' rows={1} cols={30} required></textarea>
                        <textarea onChange={() => checkContactEmail()} id='footerContactEmail' ref={contactEmailTextbox} placeholder='Your Email Address' name='emailAddress' rows={1} cols={30} required></textarea>
                        <textarea onChange={() => checkContactMessage()} id='footerContactMessage' ref={contactMessageTextbox} placeholder='Your Message' name='message' rows={5} cols={30} required></textarea>
                        <input type='hidden' name='botcheck' className='hidden' />
                        <button type='submit' id='footerContactSubmit' ref={contactSubmitButton}>Submit</button>
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