import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WhatsAppButtonContainer } from './Whatsapp.Button.js';

export default function WhatsAppButton() {
  return (
    <WhatsAppButtonContainer
      href="https://wa.me/5491169253825"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </WhatsAppButtonContainer>
  );
}
