import {
  Section,
  Left,
  Right,
  Badge,
  Title,
  Subtitle
} from './Hero.styles';
import { heroData } from '../../data/hero';
import PlanCard from './PlanCard';
import FormHero from './FormHero';
import badgeIcon from '/logos/salud.svg';

export default function HeroSection() {
  const { badgeText, title, subtitle } = heroData;

  return (
    <Section>
      <div className="container">
        <Left>
          <PlanCard />
        </Left>
        <Right>
          <Badge>
            <img src={badgeIcon} alt="" />
            {badgeText}
          </Badge>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <FormHero />
        </Right>
      </div>
    </Section>
  );
}
